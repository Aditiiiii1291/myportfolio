import type { ReactNode } from 'react'
import { Link } from 'react-router'
import type { useLocationOpening } from './useLocationOpening'
import LocationOpening from './LocationOpening'
import village from './assets/plaza/village-hub-v03.webp'
import './mailbox.css'
import './location-world.css'

export default function LocationWorld({ title, subtitle, entry, returnFocus, children }: {
  title: string; subtitle: string; entry: ReturnType<typeof useLocationOpening>; returnFocus: string; children: ReactNode
}) {
  return <main id="main" className={`mailbox-world location-world${entry.opening ? ' skills-opening' : ''}`}>
    <img className="mailbox-backdrop" src={village} alt="" />
    <div className="mailbox-arrival"><LocationOpening title={title} subtitle={subtitle} entry={entry} /></div>
    <div className="mailbox-dialogue skills-journal" onFocusCapture={entry.dismiss}>
      {children}
      <Link className="mailbox-return" to="/village" state={{ restoreContext: true, returnFocus }}>← Back to Village</Link>
    </div>
  </main>
}
