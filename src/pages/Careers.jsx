import { useEffect } from 'react'
import { careersPage as page } from '../data/careers'
import { company, mapsUrl } from '../data/site'
import Icon from '../components/Icon'
import Magnetic from '../components/Magnetic'
import ProcessSteps from '../components/ProcessSteps'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'

const num = (i) => String(i + 1).padStart(2, '0')
const applyLink = (subject) => `mailto:${page.email}?subject=${encodeURIComponent(subject)}`

function Hero() {
  const { hero } = page
  return (
    <section className="page-hero">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="container page-hero-inner">
        <div>
          <p className="label intro" style={{ '--d': 1 }}>{hero.label}</p>
          <h1 className="page-title intro" style={{ '--d': 2 }}>
            {hero.title} <span className="gradient-text animated">{hero.accent}</span>
          </h1>
          <p className="page-lead intro" style={{ '--d': 3 }}>{hero.text}</p>
          <div className="page-actions intro" style={{ '--d': 4 }}>
            <Magnetic>
              <a href={applyLink('Job application')} className="btn btn-primary">
                {hero.primary} <Icon name="arrow" size={18} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#teams" className="btn btn-ghost">{hero.secondary}</a>
            </Magnetic>
          </div>
        </div>

        <div className="modules-panel intro" style={{ '--d': 3 }}>
          <div className="modules-head">
            <span className="deliver-icon"><Icon name="pin" size={18} /></span>
            <div>
              <strong>Where we work</strong>
              <small>Teams in two offices</small>
            </div>
          </div>
          <ul className="offices-list">
            {company.offices.map((o) => (
              <li key={o.city}>
                <a href={mapsUrl(o.address)} target="_blank" rel="noreferrer" title="Open in Google Maps">
                  <strong>{o.city} <span aria-hidden="true">↗</span></strong>
                  <small>{o.address}</small>
                </a>
              </li>
            ))}
          </ul>
          <p className="panel-note"><Icon name="clock" size={16} /> {company.hours}</p>
        </div>
      </div>
    </section>
  )
}

function Why() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead num="01" label="Why Tribox" title="A place to" accent="do your best work" />
        <div className="card-grid cols-4">
          {page.why.map((w, i) => (
            <Reveal key={w.title} delay={i * 90} className="card">
              <span className="card-icon"><Icon name={w.icon} size={22} /></span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Teams() {
  return (
    <section id="teams" className="section">
      <div className="container">
        <SectionHead
          num="02"
          label="Our teams"
          title="Teams you"
          accent="could join"
          intro="We hire across consulting, development and delivery — for our offices in Dubai and Lahore."
        />
        <div className="card-grid cols-4">
          {page.teams.map((t, i) => (
            <Reveal key={t.title} delay={i * 90} className="card">
              <span className="card-num">{num(i)}</span>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Hiring() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead num="03" label="How we hire" title="Our hiring" accent="process" />
        <ProcessSteps steps={page.hiring} className="process-4" />
      </div>
    </section>
  )
}

// Open invitation: no listed vacancies — anyone interested in any role can email their CV
function Apply() {
  const { apply } = page
  return (
    <section id="apply" className="section">
      <div className="container">
        <SectionHead num="04" label="Apply" title={apply.title} accent={apply.accent} />
        <Reveal className="card apply">
          <span className="card-icon"><Icon name="mail" size={22} /></span>
          <div>
            <h3>{apply.heading}</h3>
            <p>
              {apply.text}{' '}
              Email it to <a href={applyLink('Job application')} className="apply-email">{page.email}</a> and tell us
              which role or team you’re interested in.
            </p>
          </div>
          <Magnetic>
            <a href={applyLink('Job application')} className="btn btn-primary">
              Send your CV <Icon name="arrow" size={18} />
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  )
}

export default function Careers() {
  // The built page already has this title; this covers the development server.
  useEffect(() => {
    const previous = document.title
    document.title = page.meta.title
    return () => { document.title = previous }
  }, [])

  return (
    <>
      <Hero />
      <Why />
      <Teams />
      <Hiring />
      <Apply />
    </>
  )
}
