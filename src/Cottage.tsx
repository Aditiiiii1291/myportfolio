import { useEffect } from 'react'
import { Link } from 'react-router'
import roomArt from './assets/cottage/cottage-room-v01.webp'
import './workshop.css'
import './cottage.css'

export default function Cottage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = "Aditi's Cottage · Aditi's Adventure"
    return () => { document.title = previousTitle }
  }, [])
  return (
    <main id="main" className="cottage-content">
      <Link className="workshop-button cottage-return" to="/village" state={{ restoreContext: true, returnFocus: 'village-cottage' }}>← Back to Village</Link>
      <div className="cottage-heading">
        <p className="workshop-eyebrow">A little corner of my world</p>
        <h1 id="cottage-title">Aditi's Cottage</h1>
      </div>
      <div className="cottage-room">
        <figure className="cottage-scene">
          <img src={roomArt} width="900" height="822" alt="" onError={event => { event.currentTarget.hidden = true }} />
          <figcaption>Painting, crafts, tennis &amp; a cozy place to pause.</figcaption>
        </figure>
        <article className="project-album cottage-journal" aria-labelledby="journal-title">
          <p className="workshop-eyebrow">My open journal</p>
          <h2 id="journal-title">Hello, I'm Aditi</h2>
          <p>I'm studying Electronics and Telecommunications engineering and pursuing full-stack development roles.</p>
          <p>I built Pathwise, TrafficIQ and MarketMind end to end. Outside building projects, I enjoy painting, arts and crafts, tennis, and animals.</p>
          <section aria-labelledby="education-title">
            <h2 id="education-title">Education</h2>
            <p>Electronics and Telecommunications engineering</p>
            <dl className="cottage-education">
              <div><dt>Institution</dt><dd>Not added yet</dd></div>
              <div><dt>Degree / program title</dt><dd>Not added yet</dd></div>
              <div><dt>Study dates / graduation</dt><dd>Not added yet</dd></div>
            </dl>
          </section>
          <section aria-labelledby="interests-title">
            <h2 id="interests-title">Things I love</h2>
            <p>Painting · Arts &amp; crafts · Tennis · Animals</p>
          </section>
          <section aria-labelledby="direction-title">
            <h2 id="direction-title">Where I'm heading</h2>
            <p>I'm pursuing full-stack development roles. You can explore what I've built in the Workshop.</p>
            <Link className="workshop-button" to="/projects">Explore my projects</Link>
            <a className="workshop-button" href="https://github.com/Aditiiiii1291/Pathwise">Pathwise on GitHub</a>
          </section>
          <section className="cottage-resume" aria-labelledby="resume-title">
            <h2 id="resume-title">Resume</h2>
            <p>Resume — not available yet</p>
          </section>
        </article>
      </div>
    </main>
  )
}
