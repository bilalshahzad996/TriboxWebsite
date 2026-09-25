import { Link } from 'react-router-dom'
import { company, services } from '../data/site'
import Logo from './Logo'

export default function Footer() {
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
                <li key={s.title}><a href="/#services">{s.title}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul>
              <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
              {company.offices.map((o) => (
                <li key={o.city}>{o.address}</li>
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
          <span>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</span>
          <div className="footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <a href="/#main" className="back-top">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
