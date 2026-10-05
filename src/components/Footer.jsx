// Privacy Policy hidden for now; uncomment to bring it back
// import { Link } from 'react-router-dom'
import { company, mapsUrl, services } from '../data/site'
import { useSyncExternalStore } from 'react'
import Logo from './Logo'

const noSubscribe = () => () => {}
const thisYear = () => new Date().getFullYear()
// The prerendered page shows the build year (set in vite.config.js); the app then uses today's
const buildYear = () => import.meta.env.BUILD_YEAR

export default function Footer() {
  const year = useSyncExternalStore(noSubscribe, thisYear, buildYear)

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-top">
          <div>
            <a href="/#main" className="logo">
              <Logo />
            </a>
            <p className="footer-text">{company.statement.replaceAll('*', '')}</p>
          </div>
          <div>
            <h2>Services</h2>
            <ul>
              {services.map((s) => (
                <li key={s.title}><a href={s.page ?? '/#services'}>{s.title}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
              {company.offices.map((o) => (
                <li key={o.city}>
                  <a href={mapsUrl(o.address)} target="_blank" rel="noreferrer" title="Open in Google Maps">{o.address}</a>
                </li>
              ))}
              <li>{company.hours}</li>
              {company.social.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noreferrer">{s.label} ↗</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-row">
          <span>© {year} {company.legalName}. All rights reserved.</span>
          {/* Privacy Policy hidden for now; uncomment to bring it back
          <div className="footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
          */}
        </div>
      </div>
    </footer>
  )
}
