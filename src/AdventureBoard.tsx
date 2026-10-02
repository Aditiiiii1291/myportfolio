import { useEffect } from 'react'
import { Link } from 'react-router'
import { projects } from './content/projects'
import { useLocationOpening } from './useLocationOpening'
import boardArt from './assets/plaza/locations/adventure-board-v01.webp'
import './workshop.css'
import './cottage.css'
import './skills-garden.css'
import './adventure-board.css'

export default function AdventureBoard() {
  const { opening, dismiss, continueButton, contentTitle, revealContent } = useLocationOpening()
  useEffect(() => {
    const previousTitle = document.title
    document.title = "Adventure Board · Aditi's Adventure"
    return () => { document.title = previousTitle }
  }, [])

  return (
    <main id="main" className="cottage-content">
      <Link className="workshop-button cottage-return" to="/village" state={{ restoreContext: true, returnFocus: 'village-board' }}>← Back to Village</Link>
      <div className="cottage-heading">
        <p className="workshop-eyebrow">Little notes from my journey</p>
        <h1 id="adventures-title">Adventure Board</h1>
      </div>
      <div className={`cottage-room${opening ? ' skills-opening' : ''}`}>
        <figure className="cottage-scene skills-scene">
          <img src={boardArt} width="600" height="548" alt="" onError={event => { event.currentTarget.hidden = true }} />
          {opening && <div className="skills-entry adventure-entry" onAnimationEnd={event => {
            if (event.target === event.currentTarget) revealContent()
          }}>
            <p className="skills-entry-title">Adventure Board</p>
            <p>A little board of things I've built and things I love.</p>
            <button ref={continueButton} className="workshop-button" onClick={() => revealContent(true)}>Continue · skip opening</button>
          </div>}
          <figcaption>A few notes, with room for the next adventure.</figcaption>
        </figure>
        <section className="adventure-notices skills-journal" aria-labelledby="board-notes-title" onFocusCapture={dismiss}>
          <h2 id="board-notes-title" tabIndex={-1} ref={contentTitle}>Pinned along the way</h2>
          <article className="adventure-note" aria-labelledby="board-projects-title">
            <p className="workshop-eyebrow">Project work</p>
            <h3 id="board-projects-title">Built from start to finish</h3>
            <p>I built Pathwise, TrafficIQ and MarketMind end to end. Each chapter records what I built and its current status.</p>
            <ul className="adventure-projects">
              {projects.map(project => <li key={project.slug}>
                <Link id={`adventure-${project.slug}`} to={`/projects/${project.slug}`}>{project.title} →</Link>
                <p>{project.summary}</p>
              </li>)}
            </ul>
          </article>
          <article className="adventure-note" aria-labelledby="board-study-title">
            <p className="workshop-eyebrow">Academic journey</p>
            <h3 id="board-study-title">Studying engineering</h3>
            <p>Electronics and Telecommunications engineering.</p>
            <Link id="adventure-about" to="/about">Visit my Cottage →</Link>
          </article>
          <article className="adventure-note" aria-labelledby="board-interests-title">
            <p className="workshop-eyebrow">Personal interests</p>
            <h3 id="board-interests-title">Beyond building</h3>
            <p>Painting, arts and crafts, tennis, and a love for animals.</p>
          </article>
          <p className="adventure-coming">More adventures coming soon.</p>
        </section>
      </div>
    </main>
  )
}
