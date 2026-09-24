import { useEffect } from 'react'
import { Link } from 'react-router'
import { projects } from './content/projects'
import './pathwise.css'

const project = projects[0]

export default function PathwiseChapter({ onAlbumReady }: { onAlbumReady: () => void }) {
  useEffect(() => { onAlbumReady() }, [onAlbumReady])
  useEffect(() => {
    const previousTitle = document.title
    document.title = `${project.title} · Aditi's Adventure`
    return () => { document.title = previousTitle }
  }, [])

  return (
    <main id="main" className="pathwise-chapter">
      <Link className="workshop-button chapter-return" to="/projects" state={{ restoreContext: true }}>← Back to Things I've Built</Link>
      <article className="project-album chapter-page" aria-labelledby="pathwise-title">
        <p className="workshop-eyebrow">Things I've Built · Chapter 01</p>
        <h1 id="pathwise-title">{project.title}</h1>
        <p className="chapter-summary">{project.summary}</p>
        <p>It brings attendance and academic records together to help staff identify students who may need support and keep track of mentor follow-ups.</p>
        <p><strong>Built by me:</strong> {project.role}</p>
        <p><strong>Languages:</strong> JavaScript · Python</p>
        <p><strong>Main tools:</strong> {project.technologies.join(' · ')}</p>
        <div className="project-actions">
          <a href={project.demo.url}>Open Live Project</a>
          <a href={project.githubUrl}>View GitHub / Source Code</a>
        </div>
        <p className="chapter-demo-note">Sign-in required. Student assessment previously encountered a missing-model error and has not been reverified.</p>
      </article>
    </main>
  )
}
