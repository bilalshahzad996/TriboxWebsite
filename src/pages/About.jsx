import { useEffect } from 'react'
import { aboutPage as page } from '../data/about'
import { company, highlights, mapsUrl, products, services } from '../data/site'
import Contact from '../components/Contact'
import Icon from '../components/Icon'
import Magnetic from '../components/Magnetic'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import ServiceMark from '../components/ServiceMark'
import TechLogo from '../components/TechLogo'

// Renders text where *asterisk-wrapped* phrases are highlighted.
function Highlighted({ text }) {
  return text.split('*').map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))
}

function Hero() {
  const { hero, leadership } = page
  // "At a glance" figures, counted from the site's data so they stay true
  const stats = [
    { value: services.length, label: 'Services' },
    { value: products.length, label: 'Products' },
    { value: company.offices.length, label: 'Offices' },
    { value: leadership.people.length, label: 'Co-founders' },
  ]
  return (
    <section className="page-hero about-hero">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="container about-hero-inner">
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

        <div className="page-actions intro" style={{ '--d': 5 }}>
          <Magnetic>
            <a href="#contact" className="btn btn-primary">
              Talk to our team <Icon name="arrow" size={18} />
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#offer" className="btn btn-ghost">What we offer</a>
          </Magnetic>
        </div>

        <dl className="about-stats intro" style={{ '--d': 6 }}>
          {stats.map((st) => (
            <div key={st.label}>
              <dt>{st.label}</dt>
              <dd className="gradient-text">{st.value}</dd>
            </div>
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

function Offer() {
  return (
    <section id="offer" className="section">
      <div className="container">
        <SectionHead
          num="02"
          label="What we offer"
          title="Services and products for"
          accent="every part of your business"
          intro={company.tagline}
        />

        <h3 className="offer-heading">Services</h3>
        <div className="offer-grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 70} as="a" href={s.page ?? '/#services'} className="offer-card">
              <span className="offer-mark"><ServiceMark service={s} size={22} /></span>
              <span className="offer-text">
                <strong>{s.short}</strong>
                <small>{s.tags.join(' · ')}</small>
              </span>
              <span className="offer-arrow" aria-hidden="true"><Icon name="arrow" size={18} /></span>
            </Reveal>
          ))}
        </div>

        <h3 className="offer-heading">Products</h3>
        <div className="offer-grid">
          {products.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 70} as="a" href={p.page} className="offer-card">
              <span className="offer-mark">
                {p.logo ? <TechLogo name={p.logo} className="mark" /> : <ServiceMark service={p} size={22} />}
              </span>
              <span className="offer-text">
                <strong>{p.title}</strong>
                <small>{p.text}</small>
              </span>
              <span className="offer-arrow" aria-hidden="true"><Icon name="arrow" size={18} /></span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Why() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead num="03" label="Why Tribox" title="Why clients" accent="choose us" />
        <div className="card-grid cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 90} className="card">
              <span className="card-icon"><Icon name={h.icon} size={22} /></span>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Leadership() {
  const { leadership } = page
  return (
    <section id="leadership" className="section">
      <div className="container">
        <SectionHead num="04" label="Leadership" title={leadership.title} accent={leadership.accent} intro={leadership.intro} />
        <div className="team-grid">
          {leadership.people.map((p, i) => (
            <Reveal key={p.name} delay={i * 110} className="team-card">
              <div className="team-photo">
                <img src={p.photo} alt={`${p.name}, ${p.role}`} loading="lazy" />
              </div>
              <h3>{p.name}</h3>
              <p>{p.role}</p>
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
      <Offer />
      <Why />
      <Leadership />
      <Contact num="05" />
    </>
  )
}
