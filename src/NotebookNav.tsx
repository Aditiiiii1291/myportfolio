import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import './notebook.css'

const destinations = [
  { label: 'Welcome', to: '/' },
  { label: 'Village', to: '/village' },
  { label: 'About' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills' },
  { label: 'Experience & Achievements' },
  { label: 'Resume' },
  { label: 'Contact' },
]

export default function NotebookNav() {
  const dialog = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const previousLocation = useRef(location.key)

  useEffect(() => {
    if (previousLocation.current === location.key) return
    previousLocation.current = location.key
    dialog.current?.close()
  }, [location.key])

  return (
    <>
      <button className="menu-trigger" aria-haspopup="dialog" aria-expanded={open}
        aria-controls="notebook" onClick={() => {
          dialog.current?.showModal()
          setOpen(true)
        }}>Menu</button>
      <dialog id="notebook" className="notebook" ref={dialog}
        aria-labelledby="notebook-title" onClose={() => setOpen(false)}>
        <div className="notebook-heading">
          <h2 id="notebook-title">Adventure notebook</h2>
          <button autoFocus onClick={() => dialog.current?.close()}>Close</button>
        </div>
        <nav aria-label="Portfolio">
          <ul>
            {destinations.map(item => (
              <li key={item.label}>
                {item.to ? (
                  <NavLink to={item.to} end onClick={() => dialog.current?.close()}>
                    {({ isActive }) => <>{item.label}{isActive && <small>Here</small>}</>}
                  </NavLink>
                ) : (
                  <span>{item.label}<small>Unavailable</small></span>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </dialog>
    </>
  )
}
