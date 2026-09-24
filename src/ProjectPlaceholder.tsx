import { useEffect } from 'react'
import { Link, useParams } from 'react-router'
import { projects } from './content/projects'

export default function ProjectPlaceholder({ onAlbumReady }: { onAlbumReady: () => void }) {
  const { slug } = useParams()
  const project = projects.find(item => item.slug === slug)
  useEffect(() => { if (project) onAlbumReady() }, [project, onAlbumReady])
  return (
    <main id="main" className="route-shell">
      <h1>{project ? project.title : 'Project not found'}</h1>
      <p>{project ? 'This project chapter is not available yet. Its live/source links are in the album.' : 'There is no project at this address.'}</p>
      <Link to="/projects" state={{ restoreContext: true }}>← Back to Workshop</Link>
    </main>
  )
}
