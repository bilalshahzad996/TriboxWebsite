import { useEffect } from 'react'
import { company } from '../data/site'

export default function NotFound() {
  // Every address is served by the app with HTTP 200, so tell search engines not to index this page.
  useEffect(() => {
    const previous = document.title
    const robots = document.querySelector('meta[name="robots"]')
    const previousRobots = robots?.getAttribute('content')
    document.title = `Page not found — ${company.name}`
    robots?.setAttribute('content', 'noindex')
    return () => {
      document.title = previous
      if (previousRobots) robots.setAttribute('content', previousRobots)
    }
  }, [])

  return (
    <section className="section not-found">
      <div className="container">
        <span className="label">(404)</span>
        <h1 className="section-title">Page not found</h1>
        <p>The page you are looking for does not exist or has moved.</p>
        <a href="/" className="btn btn-primary">Back to home</a>
      </div>
    </section>
  )
}
