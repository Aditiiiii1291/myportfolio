import { Link } from 'react-router'
import welcomeArt from './assets/welcome-aditi.webp'

export default function Welcome() {
  return (
    <main id="main" className="welcome-content">
      <div className="welcome-copy">
        <h1>Aditi's <br />Adventure</h1>
        <p className="welcome-tagline">A little world of things I build, ideas I explore, and things I love.</p>
        <div className="welcome-actions">
          <Link className="entry-link primary" to="/village">Enter My World <span aria-hidden="true">→</span></Link>
          <Link className="entry-link" to="/projects">View Projects</Link>
        </div>
        <p className="resume-status">Resume <span>— not available yet</span></p>
      </div>
      <img className="welcome-art" src={welcomeArt} width="1254" height="1254"
        alt="Aditi with middle-parted brunette hair, cat-eye glasses and pink headphones, holding her fluffy cream bunny."
        fetchPriority="high" />
    </main>
  )
}
