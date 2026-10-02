import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import hubArt from './assets/plaza/village-hub-v01.webp'
import portraitArt from './assets/plaza/village-hub-portrait-v02.webp'
import workshopArt from './assets/plaza/locations/workshop-mobile-v01.webp'
import cottageArt from './assets/plaza/locations/cottage-exterior-v01.webp'
import gardenArt from './assets/plaza/locations/skills-garden-v01.webp'
import boardArt from './assets/plaza/locations/adventure-board-v01.webp'
import mailboxArt from './assets/plaza/locations/mailbox-v01.webp'
import hostArt from './assets/plaza/locations/aditi-village-host-v02.webp'
import './plaza.css'

const mobileScenePixel = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='

const hints = [
  'Explore the Workshop, Cottage, Skills Garden and Adventure Board. The Mailbox is still being built.',
  'Open Menu anytime to jump somewhere directly.',
  'Use Tab and Enter to explore with a keyboard.',
]

export default function Plaza({ entered, onEnter }: { entered: boolean; onEnter: () => void }) {
  const intro = useRef<HTMLDialogElement>(null)
  const workshop = useRef<HTMLAnchorElement>(null)
  const [hint, setHint] = useState<number | null>(entered ? null : 0)
  const [artFailed, setArtFailed] = useState(false)

  function dismissHint() {
    setHint(null)
    workshop.current?.focus({ preventScroll: true })
  }

  useEffect(() => {
    if (!entered) intro.current?.showModal()
    else if (intro.current?.open) {
      intro.current.close()
      workshop.current?.focus({ preventScroll: true })
    }
  }, [entered])

  return (
    <main id="main" className={`plaza-content${artFailed ? ' art-unavailable' : ''}`}>
      <h1 className="visually-hidden">Aditi's village</h1>
      <div className="plaza-scene">
        {artFailed && <p role="status">The village illustration couldn't load. You can still enter the Workshop or use Menu.</p>}
        <picture className="plaza-background">
          <source media="(max-width: 700px)" srcSet={mobileScenePixel} />
          <source media="(max-aspect-ratio: 1/1)" srcSet={portraitArt} />
          <img className="plaza-arrival" src={hubArt} width="1536" height="1024"
            alt="" aria-hidden="true"
            fetchPriority="high" onError={() => setArtFailed(true)} />
        </picture>
        <Link id="village-workshop" className="hub-place hub-workshop" ref={workshop} to="/projects" aria-label="Enter Project Workshop">
          <picture className="mobile-place-art">
            <source media="(max-width: 700px)" srcSet={workshopArt} />
            <img src={mobileScenePixel} width="600" height="600" alt="" />
          </picture>
          <span className="hub-sign">Project Workshop</span>
        </Link>
        <Link id="village-cottage" className="hub-place hub-cottage" to="/about" aria-label="Enter Aditi's Cottage">
          <picture className="mobile-place-art">
            <source media="(max-width: 700px)" srcSet={cottageArt} />
            <img src={mobileScenePixel} width="600" height="548" alt="" />
          </picture>
          <span className="hub-sign">Aditi's Cottage<small>About</small></span>
        </Link>
        <picture className="mobile-place-art mobile-village-host">
          <source media="(max-width: 700px)" srcSet={hostArt} />
          <img src={mobileScenePixel} width="460" height="491" alt="Aditi and her cream bunny welcoming visitors to the village." />
        </picture>
        <Link id="village-garden" className="hub-place hub-garden" to="/skills" aria-label="Enter Skills Garden">
          <picture className="mobile-place-art">
            <source media="(max-width: 700px)" srcSet={gardenArt} />
            <img src={mobileScenePixel} width="600" height="480" alt="" />
          </picture>
          <span className="hub-sign">Skills Garden<small>Skills</small></span>
        </Link>
        <Link id="village-board" className="hub-place hub-board" to="/adventures" aria-label="Enter Adventure Board">
          <picture className="mobile-place-art">
            <source media="(max-width: 700px)" srcSet={boardArt} />
            <img src={mobileScenePixel} width="600" height="548" alt="" />
          </picture>
          <span className="hub-sign">Adventure Board<small>Experience &amp; Achievements</small></span>
        </Link>
        <div className="hub-place hub-mailbox">
          <picture className="mobile-place-art">
            <source media="(max-width: 700px)" srcSet={mailboxArt} />
            <img src={mobileScenePixel} width="400" height="400" alt="" />
          </picture>
          <span className="hub-sign">Mailbox<small>Contact · Unavailable</small></span>
        </div>
      </div>
      <p className="world-caption">Pick a place to explore</p>
      <dialog className="world-intro" ref={intro} aria-labelledby="world-intro-title"
        onCancel={event => { event.preventDefault(); onEnter() }}>
        <h2 id="world-intro-title">Ready to explore Aditi's world?</h2>
        <button autoFocus onClick={onEnter}>Yes, let's go</button>
        <Link to="/projects" onClick={onEnter}>View Projects</Link>
      </dialog>
      {entered && hint !== null && (
        <aside className="world-hint" aria-label="Exploration hint">
          <p role="status">{hints[hint]}</p>
          <button onClick={() => hint < hints.length - 1 ? setHint(hint + 1) : dismissHint()}>
            {hint < hints.length - 1 ? 'Next hint' : 'Got it'}
          </button>
          <button onClick={dismissHint}>Dismiss</button>
        </aside>
      )}
    </main>
  )
}
