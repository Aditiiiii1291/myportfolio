import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import hubArt from './assets/plaza/village-hub-v01.webp'
import portraitArt from './assets/plaza/village-hub-portrait-v02.webp'
import './plaza.css'

const hints = [
  'The Workshop opens the Projects preview. Other places are still being built.',
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
        <picture>
          <source media="(max-aspect-ratio: 1/1)" srcSet={portraitArt} />
          <img className="plaza-arrival" src={hubArt} width="1536" height="1024"
            alt="Aditi and her cream bunny in a blossom-filled village, with paths joining the Workshop, Cottage, Skills Garden, Adventure Board and Mailbox."
            fetchPriority="high" onError={() => setArtFailed(true)} />
        </picture>
        <Link id="village-workshop" className="hub-place hub-workshop" ref={workshop} to="/projects" aria-label="Enter Project Workshop">
          <span className="hub-sign">Project Workshop</span>
        </Link>
        <div className="hub-place hub-cottage"><span className="hub-sign">Aditi's Cottage<small>About · Unavailable</small></span></div>
        <div className="hub-place hub-garden"><span className="hub-sign">Skills Garden<small>Unavailable</small></span></div>
        <div className="hub-place hub-board"><span className="hub-sign">Adventure Board<small>Unavailable</small></span></div>
        <div className="hub-place hub-mailbox"><span className="hub-sign">Mailbox<small>Contact · Unavailable</small></span></div>
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
