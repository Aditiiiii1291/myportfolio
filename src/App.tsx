import { useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router'
import Welcome from './Welcome'
import Plaza from './Plaza'
import NotebookNav from './NotebookNav'
import Workshop from './Workshop'
import ProjectPlaceholder from './ProjectPlaceholder'

export default function App() {
  const location = useLocation()
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
