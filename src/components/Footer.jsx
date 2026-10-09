import { company, mapsUrl, products, services } from '../data/site'
import { useSyncExternalStore } from 'react'
import Logo from './Logo'
import TechLogo from './TechLogo'

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
            {/* Tribox's partners */}
            <div className="footer-platforms">
              <span className="footer-platforms-label">Partners</span>
              <div className="footer-platforms-logos">
                <span className="footer-platform" title="Microsoft">
                  <TechLogo name="microsoft" className="footer-platform-mark" />
                  <span className="footer-platform-name">Microsoft</span>
                </span>
                <span className="footer-platform" title="Odoo">
                  <TechLogo name="odooWordmark" className="footer-platform-wordmark" />
                </span>
              </div>
            </div>
          </div>
          <div>
            <h2>Services</h2>
            <ul>
              {services.map((s) => (
                <li key={s.short ?? s.title}><a href={s.page ?? '/#services'}>{s.short ?? s.title}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Products</h2>
            <ul>
              {products.map((p) => (
                <li key={p.title}><a href={p.page}>{p.title}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Company</h2>
            <ul>
              <li><a href="/about/">About us</a></li>
              <li><a href="/careers/">Careers</a></li>
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
          <div className="footer-links">
            <a href="/privacy-policy/">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
