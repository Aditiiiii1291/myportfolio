import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { projects } from './content/projects'
import gardenArt from './assets/plaza/locations/skills-garden-v01.webp'
import './workshop.css'
import './cottage.css'
import './skills-garden.css'

// Project-use evidence: CONTENT_INTAKE.md, PATHWISE_CHAPTER.md and
// the project inventory in PRD.md. These are not proficiency ratings.
const skillGroups = [
  {
    title: 'Web interfaces',
    tools: 'React · JavaScript · TypeScript',
    context: 'React and JavaScript in Pathwise; React and TypeScript in TrafficIQ.',
    projects: [projects[0], projects[1]],
  },
  {
    title: 'Backend & data',
    tools: 'Python · FastAPI · SQLAlchemy',
    context: 'API services and relational records in Pathwise; Python backend work in MarketMind.',
    projects: [projects[0], projects[2]],
  },
  {
    title: 'Analysis & prototypes',
    tools: 'pandas · scikit-learn · Streamlit',
    context: 'Data processing and ML code in Pathwise; the Streamlit prototype in MarketMind.',
    projects: [projects[0], projects[2]],
  },
] as const

export default function SkillsGarden() {
  const [opening, setOpening] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const continueButton = useRef<HTMLButtonElement>(null)
  const journalTitle = useRef<HTMLHeadingElement>(null)

  function revealJournal(advance = false) {
    const transferFocus = document.activeElement === continueButton.current
    setOpening(false)
    if (advance || transferFocus) journalTitle.current?.focus({ preventScroll: !advance })
  }

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => { if (preference.matches) revealJournal() }
    preference.addEventListener('change', update)
    return () => preference.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const previousTitle = document.title
    document.title = "Skills Garden · Aditi's Adventure"
    return () => { document.title = previousTitle }
  }, [])

  return (
    <main id="main" className="cottage-content">
      <Link className="workshop-button cottage-return" to="/village" state={{ restoreContext: true, returnFocus: 'village-garden' }}>← Back to Village</Link>
      <div className="cottage-heading">
        <p className="workshop-eyebrow">A little garden of things I've learned</p>
        <h1 id="skills-title">Skills Garden</h1>
      </div>
      <div className={`cottage-room skills-room${opening ? ' skills-opening' : ''}`}>
        <figure className="cottage-scene skills-scene">
          <img src={gardenArt} width="600" height="480" alt="" onError={event => { event.currentTarget.hidden = true }} />
          {opening && <div className="skills-entry" onAnimationEnd={event => {
            if (event.target === event.currentTarget) revealJournal()
          }}>
            <p className="skills-entry-title">Skills Garden</p>
            <p>A little garden of things I've learned.</p>
            <button ref={continueButton} className="workshop-button" onClick={() => revealJournal(true)}>Continue · skip opening</button>
          </div>}
          <figcaption>A few seeds, grown through building.</figcaption>
        </figure>
        <article className="project-album cottage-journal skills-journal" aria-labelledby="skills-journal-title" onFocusCapture={() => setOpening(false)}>
          <p className="workshop-eyebrow">My garden journal</p>
          <h2 id="skills-journal-title" tabIndex={-1} ref={journalTitle}>Tools I've used</h2>
          <p>A small collection of technologies used in my projects. Follow a project to see what I built with them.</p>
          {skillGroups.map((group, index) => <section key={group.title} aria-labelledby={`skill-group-${index}`}>
            <h2 id={`skill-group-${index}`}>{group.title}</h2>
            <p><strong>{group.tools}</strong></p>
            <p>{group.context}</p>
            {group.projects.map(project => <Link id={`skills-${index}-${project.slug}`} className="workshop-button" key={project.slug} to={`/projects/${project.slug}`}>{project.title}</Link>)}
          </section>)}
          <p>Project use is shown here, not a proficiency rating. Demo status and limitations are recorded in each chapter.</p>
        </article>
      </div>
    </main>
  )
}
