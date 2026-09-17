import { Link, Route, Routes } from 'react-router'

export default function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<h1>Aditi's Adventure</h1>} />
        <Route path="*" element={
          <>
            <h1>Page not found</h1>
            <Link to="/">Back to home</Link>
          </>
        } />
      </Routes>
    </main>
  )
}
