import { Link } from 'react-router'
import arrivalArt from './assets/plaza/plaza-arrival.webp'
import workshopArt from './assets/plaza/workshop-exterior.webp'
import './plaza.css'

export default function Plaza() {
  return (
    <div className="welcome plaza">
      <header className="welcome-header">
        <Link className="wordmark" to="/">Aditi's Adventure</Link>
        <details className="welcome-menu">
          <summary>Menu</summary>
          <nav aria-label="Plaza navigation">
            <Link to="/">Back to Welcome</Link>
            <Link to="/projects">View Projects</Link>
            <span>Resume — not available yet</span>
          </nav>
        </details>
      </header>
      <main id="main" className="plaza-content">
        <div className="plaza-intro">
          <h1>A little place to begin</h1>
          <p>Welcome to the plaza. My projects live just along the path.</p>
        </div>
        <div className="plaza-scene">
          <img className="plaza-arrival" src={arrivalArt} width="1536" height="1024"
            alt="Aditi and her cream bunny beside a blossom-lined plaza, with a path toward the Workshop."
            fetchPriority="high" />
          <Link className="plaza-workshop" to="/projects" aria-describedby="workshop-status">
            <img src={workshopArt} width="1254" height="1254" alt="" />
            <span className="workshop-label">Project Workshop <span aria-hidden="true">→</span></span>
          </Link>
        </div>
        <div className="plaza-notes">
          <p id="workshop-status">Projects begin here. The album is still being built.</p>
          <p>More of the village is on its way.</p>
        </div>
      </main>
    </div>
  )
}
