import { useState } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router'
import Welcome from './Welcome'
import Plaza from './Plaza'
import NotebookNav from './NotebookNav'

export default function App() {
  const location = useLocation()
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
    <div className={location.pathname === '/village' ? 'world' : location.pathname === '/' ? 'welcome title-screen' : 'welcome'}>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="welcome-header">
        {location.pathname === '/' ? <span className="wordmark">Aditi's Adventure</span>
          : <Link className="wordmark" to="/">Aditi's Adventure</Link>}
        <NotebookNav />
      </header>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/village" element={<Plaza entered={enteredVillage} onEnter={enterVillage} />} />
        <Route path="/projects" element={
          <main id="main" className="route-shell">
            <h1>Projects</h1>
            <p>The project album is not available yet.</p>
            <Link to="/">Back to Welcome</Link>
          </main>
        } />
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
