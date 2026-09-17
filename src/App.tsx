import { Link, Route, Routes } from 'react-router'
import Welcome from './Welcome'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/village" element={
          <main id="main" className="route-shell">
            <h1>The village</h1>
            <p>This part of Aditi's world is not ready to explore yet.</p>
            <Link to="/">Back to Welcome</Link>
          </main>
        } />
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
    </>
  )
}
