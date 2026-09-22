import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { projects } from './content/projects'
import bunnyAlbum from './assets/workshop/bunny-album-v01.webp'
import './workshop.css'

export default function Workshop({ albumReady, onAlbumReady }: { albumReady: boolean; onAlbumReady: () => void }) {
  const [delivering, setDelivering] = useState(false)
  const albumHeading = useRef<HTMLHeadingElement>(null)
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const open = albumReady || reducedMotion

  useEffect(() => {
    if (reducedMotion && !albumReady) onAlbumReady()
    if (!delivering) return
    const timer = window.setTimeout(() => {
      if (document.activeElement?.classList.contains('skip-delivery')) albumHeading.current?.focus({ preventScroll: true })
      setDelivering(false)
    }, 1100)
    return () => window.clearTimeout(timer)
  }, [delivering, reducedMotion, albumReady, onAlbumReady])

  function openAlbum(animate: boolean) {
    onAlbumReady()
    setDelivering(animate && !reducedMotion)
    requestAnimationFrame(() => {
      albumHeading.current?.focus({ preventScroll: true })
      albumHeading.current?.closest('section')?.scrollIntoView({ block: 'start' })
    })
  }

  return (
    <main id="main" className="workshop-content">
      <div className="workshop-heading">
        <p className="workshop-eyebrow">A little room for things I've made</p>
        <h1>Project Workshop</h1>
        <Link to="/village">← Back to Village</Link>
      </div>
      <div className="workshop-shelf" aria-label="Project shelf">
        <div className="shelf-books" aria-hidden="true">
          {projects.map(project => <span key={project.slug}>{project.title}</span>)}
        </div>
        <button className="shelf-album" onClick={() => openAlbum(!open)} aria-controls="project-album" aria-expanded={open}>
          <span>Things I've Built</span>
          <small>{open ? 'Return to the album' : 'Open the project album'}</small>
        </button>
      </div>
      {!open && <div className="shelf-invitation">
        <p>Choose the album on the shelf. The bunny will bring it over.</p>
        <button className="workshop-button" onClick={() => openAlbum(false)}>Skip delivery · open album now</button>
      </div>}
      <section id="project-album" className="project-album" hidden={!open} aria-labelledby="album-title">
        <div className="album-heading">
          <div><p className="workshop-eyebrow">The project collection</p><h2 id="album-title" tabIndex={-1} ref={albumHeading}>Things I've Built</h2></div>
          <img className={delivering ? 'album-bunny delivering' : 'album-bunny'} src={bunnyAlbum} alt="" width="160" height="160" />
        </div>
        <p className="album-status" role="status">{delivering ? 'The bunny is bringing your album. All projects are already available below.' : 'Your album is open. Pick a project to explore.'}</p>
        {delivering && <button className="workshop-button skip-delivery" onClick={() => { setDelivering(false); albumHeading.current?.focus() }}>Skip animation</button>}
        <ol className="album-projects">
          {projects.map((project, index) => <li key={project.slug}>
            <p className="project-number">Chapter {String(index + 1).padStart(2, '0')}</p>
            <h3><Link to={`/projects/${project.slug}`}>{project.title} <span aria-hidden="true">↗</span></Link></h3>
            <p>{project.summary}</p>
            <p className="project-role">{project.role}</p>
            <p className="project-tech">{project.technologies.join(' · ')}</p>
            {project.slug !== 'pathwise' && <p className="chapter-status">Chapter not available yet.</p>}
            <div className="project-actions">
              {project.demo.type === 'hosted' && <a href={project.demo.url}>Open Live Project</a>}
              <a href={project.githubUrl}>View GitHub / Source Code</a>
            </div>
            <p className="project-demo-note">{project.demo.accessNote} {project.demo.verificationNote}</p>
          </li>)}
        </ol>
      </section>
    </main>
  )
}
