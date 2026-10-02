import { useEffect } from 'react'
import { Link } from 'react-router'
import { projects } from './content/projects'
import { useLocationOpening } from './useLocationOpening'
import LocationWorld from './LocationWorld'
import './workshop.css'
import './cottage.css'
import './skills-garden.css'
import './adventure-board.css'

export default function AdventureBoard() {
  const entry = useLocationOpening()
  const { dismiss, contentTitle } = entry
  useEffect(() => {
    const previousTitle = document.title
    document.title = "Adventure Board · Aditi's Adventure"
    return () => { document.title = previousTitle }
  }, [])

  return (
    <LocationWorld title="Adventure Board" subtitle="A little board of things I've built and things I love." entry={entry} returnFocus="village-board">
      <h1>Adventure Board</h1>
        <section className="location-content" aria-labelledby="board-notes-title" onFocusCapture={dismiss}>
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
    </LocationWorld>
  )
}
