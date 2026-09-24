import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, Route, Routes, useLocation, useNavigationType } from 'react-router'
import Welcome from './Welcome'
import Plaza from './Plaza'
import NotebookNav from './NotebookNav'
import Workshop from './Workshop'
import ProjectPlaceholder from './ProjectPlaceholder'
import PathwiseChapter from './PathwiseChapter'

export default function App() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const positions = useRef(new Map<string, { y: number; focusId: string }>())
  const lastVisit = useRef(new Map<string, string>())
  const previousEntry = useRef(location.key)

  useEffect(() => {
    const previous = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    return () => { window.history.scrollRestoration = previous }
  }, [])

  useLayoutEffect(() => {
    const navigated = previousEntry.current !== location.key
    previousEntry.current = location.key
    const savedKey = navigationType === 'POP' ? location.key
      : location.state?.restoreContext ? lastVisit.current.get(location.pathname) : undefined
    const saved = savedKey ? positions.current.get(savedKey) : undefined
    const position = { y: saved?.y ?? 0, focusId: saved?.focusId ?? '' }
    positions.current.set(location.key, position)
    lastVisit.current.set(location.pathname, location.key)

    function saveScroll() { position.y = window.scrollY }
    function saveFocus() {
      const active = document.activeElement
      if (active instanceof HTMLElement && active.closest('main') && active.id) position.focusId = active.id
    }
    const frame = requestAnimationFrame(() => {
      const fallback = location.state?.restoreContext
        ? document.getElementById(location.pathname === '/projects' ? 'album-title' : 'village-workshop') : null
      const target = (saved?.focusId ? document.getElementById(saved.focusId) : null)
        ?? fallback ?? document.querySelector<HTMLElement>('main h1')
      if (navigated && target && !document.querySelector('dialog[open]')) {
        if (!target.matches('a, button')) target.tabIndex = -1
        target.focus({ preventScroll: true })
      }
      window.scrollTo(0, saved?.y ?? 0)
      if (!saved && fallback) fallback.scrollIntoView({ block: 'start' })
      saveScroll()
      saveFocus()
      window.addEventListener('scroll', saveScroll, { passive: true })
      document.addEventListener('focusin', saveFocus)
    })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', saveScroll)
      document.removeEventListener('focusin', saveFocus)
    }
  }, [location.key, location.pathname, location.state, navigationType])
  const [albumReady, setAlbumReady] = useState(() => {
    try { return sessionStorage.getItem('workshop-album-ready') === 'true' }
    catch { return false }
  })
  function openAlbum() {
    setAlbumReady(true)
    try { sessionStorage.setItem('workshop-album-ready', 'true') }
    catch { /* Shell state preserves access when storage is unavailable. */ }
  }
  const [enteredVillage, setEnteredVillage] = useState(() => {
    try { return sessionStorage.getItem('village-entered') === 'true' }
    catch { return false }
  })
  function enterVillage() {
    setEnteredVillage(true)
    try { sessionStorage.setItem('village-entered', 'true') }
    catch { /* Local state remembers entry if storage is unavailable. */ }
  }
  return (
    <div className={location.pathname === '/village' ? 'world' : location.pathname === '/' ? 'welcome title-screen' : location.pathname.startsWith('/projects') ? 'welcome workshop-page' : 'welcome'}>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="welcome-header">
        {location.pathname === '/' ? <span className="wordmark">Aditi's Adventure</span>
          : <Link className="wordmark" to="/">Aditi's Adventure</Link>}
        <NotebookNav />
      </header>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/village" element={<Plaza entered={enteredVillage} onEnter={enterVillage} />} />
        <Route path="/projects" element={<Workshop albumReady={albumReady} onAlbumReady={openAlbum} />} />
        <Route path="/projects/pathwise" element={<PathwiseChapter onAlbumReady={openAlbum} />} />
        <Route path="/projects/:slug" element={<ProjectPlaceholder onAlbumReady={openAlbum} />} />
        <Route path="*" element={
          <main id="main" className="route-shell">
            <h1>Page not found</h1>
            <Link to="/">Back to home</Link>
          </main>
        } />
      </Routes>
    </div>
  )
}
