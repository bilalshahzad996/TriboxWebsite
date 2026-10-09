import { useEffect } from 'react'
import { aboutPage as page } from '../data/about'
import { company, mapsUrl, products, services } from '../data/site'
import BrandLogo from '../components/BrandLogo'
import ClientMarquee from '../components/ClientMarquee'
import Contact from '../components/Contact'
import Icon from '../components/Icon'
import GlobalPresence from '../components/GlobalPresence'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import TiltCard from '../components/TiltCard'
import CountUp from '../components/CountUp'

// Renders text where *asterisk-wrapped* phrases are highlighted.
function Highlighted({ text }) {
  return text.split('*').map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))
}

function Hero() {
  const { hero, leadership } = page
  // "At a glance" figures, counted from the site's data so they stay true
  const stats = [
    { value: services.length, label: 'Services', icon: 'support', colors: ['var(--accent)', 'var(--primary)'], text: 'ERP, CRM, web, mobile & e‑invoicing' },
    { value: products.length, label: 'Products', icon: 'server', colors: ['var(--primary)', 'var(--violet)'], text: 'POS, SIS, HRMS & Fleet Track' },
    { value: company.offices.length, label: 'Offices', icon: 'pin', colors: ['var(--brand)', 'var(--primary)'], text: company.offices.map((o) => o.city.split(',')[0]).join(' & ') },
    { value: leadership.people.length, label: 'Co-founders', icon: 'users', colors: ['var(--violet)', 'var(--primary)'], text: 'Close to every engagement' },
  ]
  return (
    <section className="page-hero about-hero">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="container about-hero-inner">
        <div className="about-hero-copy">
          <p className="label intro" style={{ '--d': 1 }}>{hero.label}</p>
          <h1 className="page-title intro" style={{ '--d': 2 }}>
            {hero.title} <span className="gradient-text animated">{hero.accent}</span>
          </h1>
          <p className="page-lead intro" style={{ '--d': 3 }}>{hero.text}</p>

          <div className="founder-row intro" style={{ '--d': 4 }}>
            <span className="founder-stack">
              {leadership.people.map((p) => <img key={p.name} src={p.photo} alt="" />)}
            </span>
            <span>Led by our <a href="#leadership">three co-founders</a></span>
          </div>

        </div>

        <GlobalPresence className="intro" />

        <dl className="about-stats intro" style={{ '--d': 6 }}>
          {stats.map((st) => (
            <TiltCard key={st.label} className="about-stat" max={6} style={{ '--c1': st.colors[0], '--c2': st.colors[1] }}>
              <span className="about-stat-bg" aria-hidden="true"><Icon name={st.icon} size={96} /></span>
              <span className="about-stat-icon"><Icon name={st.icon} size={20} /></span>
              <dt>{st.label}</dt>
              <dd>
                <span className="about-stat-value"><CountUp value={st.value} /></span>
                <span className="about-stat-text">{st.text}</span>
              </dd>
            </TiltCard>
          ))}
        </dl>
      </div>
    </section>
  )
}

function Story() {
  return (
    <section className="section">
      <div className="container approach">
        <div>
          <Reveal as="span" className="label"><b>01</b> Who we are</Reveal>
          <Reveal as="p" delay={80} className="story-lead"><Highlighted text={company.statement} /></Reveal>
          <Reveal as="p" delay={140}>{company.about}</Reveal>
        </div>
        <Reveal variant="right" delay={150} className="modules-panel">
          <div className="modules-head">
            <span className="deliver-icon"><Icon name="pin" size={18} /></span>
            <div>
              <strong>{company.legalName}</strong>
              <small>Where we work</small>
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
        </Reveal>
      </div>
    </section>
  )
}

function Purpose() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead num="02" label="Mission, vision & values" title="What drives" accent="us" />
        <div className="card-grid cols-3">
          {page.purpose.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} className="card purpose-card">
              <span className="card-icon"><Icon name={p.icon} size={22} /></span>
              <h3>{p.title}</h3>
              {p.text && <p>{p.text}</p>}
              {p.values && (
                <ul className="purpose-values">
                  {p.values.map((v) => {
                    const [name, rest] = v.split(' — ')
                    return <li key={v}><Icon name="check" size={16} /> <span><strong>{name}</strong> — {rest}</span></li>
                  })}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Engage() {
  const { engage } = page
  return (
    <section className="section">
      <div className="container">
        <SectionHead num="03" label="Engagement models" title="4 ways to" accent="engage" intro={engage.note} />
        {/* Hovering or focusing a card highlights it */}
        <Reveal className="engage-ways">
          {engage.ways.map((w, i) => (
            <a key={w.title} href="#contact" className="engage-way" style={{ '--i': i }}>
              <span className="engage-way-top">
                <span className="engage-way-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="engage-way-icon"><Icon name={w.icon} size={20} /></span>
              </span>
              <strong>{w.title}</strong>
              <span className="engage-way-text">{w.text}</span>
              <span className="engage-way-arrow" aria-hidden="true"><Icon name="arrow" size={18} /></span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

function TrustedBy() {
  return (
    <section className="section section-tight">
      <div className="container">
        <SectionHead num="04" label="Our clients" title="Trusted by" accent="growing businesses" />
      </div>
      <ClientMarquee />
    </section>
  )
}

function Leadership() {
  const { leadership } = page
  return (
    <section id="leadership" className="section">
      <div className="container">
        <SectionHead num="05" label="Leadership" title={leadership.title} accent={leadership.accent} intro={leadership.intro} />
        <div className="team-grid">
          {leadership.people.map((p, i) => (
            <Reveal key={p.name} delay={i * 110} className="team-card">
              <div className="team-photo">
                <img src={p.photo} alt={`${p.name}, ${p.role}`} loading="lazy" />
              </div>
              <h3>{p.name}</h3>
              <p>{p.role}</p>
              <div className="team-links">
                <a href={`mailto:${p.email}`} aria-label={`Email ${p.name}`} title={p.email}>
                  <Icon name="mail" size={18} />
                </a>
                <a href={p.linkedin} target="_blank" rel="noreferrer" aria-label={`${p.name} on LinkedIn`} title="LinkedIn">
                  <BrandLogo name="linkedin" className="team-linkedin" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function About() {
  // The built page already has this title; this covers the development server.
  useEffect(() => {
    const previous = document.title
    document.title = page.meta.title
    return () => { document.title = previous }
  }, [])

  return (
    <>
      <Hero />
      <Story />
      <Purpose />
      <Engage />
      <TrustedBy />
      <Leadership />
      <Contact num="06" />
    </>
  )
}
