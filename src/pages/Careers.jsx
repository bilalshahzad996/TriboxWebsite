import { useEffect } from 'react'
import { careersPage as page } from '../data/careers'
import { company } from '../data/site'
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
              <a href="#openings" className="btn btn-primary">
                {hero.primary} <Icon name="arrow" size={18} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href={applyLink('General application')} className="btn btn-ghost">{hero.secondary}</a>
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
                <strong>{o.city}</strong>
                <small>{o.address}</small>
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
    <section className="section">
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

function Openings() {
  const { openings } = page
  return (
    <section id="openings" className="section">
      <div className="container">
        <SectionHead num="04" label="Open roles" title="Current" accent="openings" />
        {openings.length > 0 && (
          <div className="jobs">
            {openings.map((job, i) => (
              <Reveal key={job.title} delay={i * 80} className="job">
                <div>
                  <h3>{job.title}</h3>
                  <div className="tags">
                    {[job.team, job.location, job.type].filter(Boolean).map((t) => <span key={t}>{t}</span>)}
                  </div>
                  {job.summary && <p>{job.summary}</p>}
                </div>
                <a href={applyLink(`Job application: ${job.title}`)} className="btn btn-primary">
                  Apply <Icon name="arrow" size={18} />
                </a>
              </Reveal>
            ))}
          </div>
        )}

        <Reveal className="card apply">
          <span className="card-icon"><Icon name="mail" size={22} /></span>
          <div>
            <h3>{openings.length ? 'Don’t see your role?' : 'No open roles right now — but we’re always glad to meet good people'}</h3>
            <p>
              Send your CV and a short note about the work you’d like to do to{' '}
              <a href={applyLink('General application')} className="apply-email">{page.email}</a>, and we’ll be in touch when
              a role fits.
            </p>
          </div>
          <Magnetic>
            <a href={applyLink('General application')} className="btn btn-primary">
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
      <Openings />
    </>
  )
}
