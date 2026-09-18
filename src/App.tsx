import { Link, Route, Routes } from 'react-router'
import Welcome from './Welcome'
import Plaza from './Plaza'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/village" element={<Plaza />} />
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
