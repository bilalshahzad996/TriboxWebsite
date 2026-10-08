import { useEffect, useRef, useState } from 'react'
import { company, marquee, highlights, services, technologies, process } from '../data/site'
import ClientMarquee from '../components/ClientMarquee'
import Contact from '../components/Contact'
import Icon from '../components/Icon'
import TechLogo from '../components/TechLogo'
import { BrandBars } from '../components/Logo'
import Reveal from '../components/Reveal'
import Magnetic from '../components/Magnetic'
import TiltCard from '../components/TiltCard'
import ParticleField from '../components/ParticleField'
import ProcessSteps from '../components/ProcessSteps'
import SectionHead from '../components/SectionHead'
import ServiceMark from '../components/ServiceMark'

// The three offset bars from the Tribox logo.
function Bars({ className = '' }) {
  return <BrandBars className={`bars ${className}`} />
}

// Headline word that cycles through the company's specialities.
function RotatingWord({ words }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), 2400)
    return () => clearInterval(t)
  }, [words.length])

  return (
    <span className="rotator">
      {words.map((w, i) => (
        <span
          key={w}
          className={`rotator-word ${i === index ? 'is-active' : ''} ${i === (index - 1 + words.length) % words.length ? 'is-prev' : ''}`}
        >
          {w}
        </span>
      ))}
    </span>
  )
}

// Inner ring: official full-colour product logos (from components/TechLogo.jsx)
const orbitInner = [
  { title: 'Microsoft Dynamics 365', logo: 'dynamics365', className: 'mark', brand: 'Microsoft', name: 'Dynamics 365' },
  { title: 'Odoo', logo: 'odooWordmark', className: 'mark-wide' },
]
// Outer ring: Tribox product icons (from components/TechLogo.jsx)
const orbitOuter = [
  { title: 'Point of Sales', logo: 'pos', name: 'Point of Sales' },
  { title: 'Human Resource Management', logo: 'hr', name: 'Human Resource Management' },
  { title: 'Shop in Shop App', logo: 'sis', name: 'Shop in Shop App' },
]

function Orbit() {
  return (
    <div className="orbit" aria-hidden="true">
      <div className="orbit-glow" />
      <div className="orbit-core">
        <Bars />
      </div>

      <div className="ring ring-inner" style={{ '--count': orbitInner.length }}>
        {orbitInner.map((s, i) => (
          <span key={s.title} className="orbit-item" style={{ '--i': i }}>
            <span className="orbit-chip is-brand">
              <TechLogo name={s.logo} className={s.className} />
              {s.name && <span className="chip-name"><small>{s.brand}</small>{s.name}</span>}
            </span>
          </span>
        ))}
      </div>
      <div className="ring ring-outer" style={{ '--count': orbitOuter.length }}>
        {orbitOuter.map((s, i) => (
          <span key={s.title} className="orbit-item" style={{ '--i': i }}>
            {s.logo ? (
              <span className="orbit-chip is-brand is-compact">
                <TechLogo name={s.logo} className="mark" />
                <span className="chip-name">{s.name}</span>
              </span>
            ) : (
              <span className="orbit-chip"><ServiceMark service={s} size={22} /></span>
            )}
          </span>
        ))}
      </div>

      <div className="float-card fc-1">
        <span className="fc-icon ok"><Icon name="check" size={16} /></span>
        <div><strong>ERP go-live</strong><small>On time · On budget</small></div>
      </div>
      <div className="float-card fc-2">
        <span className="fc-icon"><Icon name="support" size={16} /></span>
        <div><strong>24/7 support</strong><small>Always on</small></div>
      </div>
      <div className="float-card fc-3">
        <span className="fc-icon"><Icon name="savings" size={16} /></span>
        <div><strong>Automation</strong><small>Lower costs</small></div>
      </div>
    </div>
  )
}

function Hero() {
  const ref = useRef(null)

  // Mouse parallax: exposes pointer position (-1..1) as --px / --py.
  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--px', (((e.clientX - rect.left) / rect.width) * 2 - 1).toFixed(3))
    ref.current.style.setProperty('--py', (((e.clientY - rect.top) / rect.height) * 2 - 1).toFixed(3))
  }

  return (
    <section className="hero" ref={ref} onPointerMove={onMove}>
      <ParticleField className="hero-canvas" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-kicker intro" style={{ '--d': 0 }}>
            <span className="pulse" /> {company.kicker}
          </p>

          <h1 className="hero-title" aria-label={`Your digital partner for ${company.rotating.join(', ')}`}>
            <span className="line" aria-hidden="true"><span className="intro" style={{ '--d': 1 }}>Your digital</span></span>
            <span className="line" aria-hidden="true"><span className="intro" style={{ '--d': 2 }}>partner for</span></span>
            <span className="line" aria-hidden="true"><span className="intro" style={{ '--d': 3 }}><RotatingWord words={company.rotating} /></span></span>
          </h1>

          <p className="hero-tagline intro" style={{ '--d': 4 }}>{company.tagline}</p>

          <div className="hero-actions intro" style={{ '--d': 5 }}>
            <Magnetic>
              <a href="#contact" className="btn btn-primary">
                Start a project <Icon name="arrow" size={18} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#services" className="btn btn-ghost">Explore services</a>
            </Magnetic>
          </div>
        </div>

        <div className="hero-visual intro" style={{ '--d': 3 }}>
          <Orbit />
        </div>
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span className="mouse"><span /></span>
        Scroll
      </a>
    </section>
  )
}

// The moving word strip under the hero. Hidden for now; set to true to bring it back.
const SHOW_MARQUEE = false

function Marquee() {
  const items = [...marquee, ...marquee]
  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee marquee-a">
        <div className="marquee-track">
          {items.map((word, i) => <span key={i}>{word}<em>✦</em></span>)}
        </div>
      </div>
      <div className="marquee marquee-b">
        <div className="marquee-track reverse">
          {items.map((word, i) => <span key={i}>{word}<em>✦</em></span>)}
        </div>
      </div>
    </div>
  )
}

// Renders text where *asterisk-wrapped* phrases are highlighted.
function Highlighted({ text }) {
  return text.split('*').map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))
}

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-intro">
          <Reveal as="span" className="label"><b>01</b> Who we are</Reveal>
          <Reveal as="h2" variant="mask" className="about-title">
            Your partner for <span className="gradient-text">digital transformation</span>
          </Reveal>
          <Reveal delay={150}>
            <a href="#contact" className="text-link">
              Talk to our team <Icon name="arrow" size={18} />
            </a>
          </Reveal>
        </div>

        <div className="about-body">
          <Reveal as="p" className="about-lead"><Highlighted text={company.statement} /></Reveal>
          <Reveal as="p" delay={100} className="about-text">{company.about}</Reveal>

          <ul className="highlights">
            {highlights.map((h, i) => (
              <Reveal as="li" key={h.title} delay={i * 90} className="highlight">
                <span className="highlight-icon"><Icon name={h.icon} size={22} /></span>
                <div>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHead
          num="02"
          label="Services"
          title="What we"
          accent="do best"
          intro="ERP implementation and support, and mobile & web development — delivered by dedicated teams aligned with your business."
        />

        <div className="bento">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 110} className={s.wide ? 'span-2' : ''}>
              <TiltCard className={`svc ${s.badge ? 'svc-featured' : ''} ${s.page ? 'svc-has-page' : ''}`}>
                <div className="svc-top">
                  <span className="svc-logo"><ServiceMark service={s} /></span>
                  <span className="svc-num">{String(i + 1).padStart(2, '0')}</span>
                </div>
                {s.badge && <span className="svc-badge">{s.badge}</span>}
                {/* With its own page, the title link covers the whole card so any click opens it */}
                <h3>{s.page ? <a href={s.page} className="svc-card-link">{s.title}</a> : s.title}</h3>
                <p>{s.text}</p>
                <div className="tags">
                  {s.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
                <a
                  href={s.page ?? '#contact'}
                  className="svc-link"
                  aria-label={s.page ? `Learn more about ${s.title}` : `Enquire about ${s.title}`}
                >
                  <Icon name="arrow" size={20} />
                </a>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Two rows of platform cards that glide in opposite directions; scrolling nudges them further.
const techRows = [technologies.slice(0, Math.ceil(technologies.length / 2)), technologies.slice(Math.ceil(technologies.length / 2))]

function Technologies() {
  const rowsRef = useRef(null)

  useEffect(() => {
    const el = rowsRef.current
    let raf = 0
    const update = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 as the rows enter from the bottom, 1 as they leave at the top
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)))
      el.style.setProperty('--shift', progress.toFixed(3))
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section id="technologies" className="section section-tight">
      <div className="container">
        <SectionHead
          num="03"
          label="Ecosystem"
          title="Technology &"
          accent="Business Platforms"
          intro="Enterprise applications, cloud, data and digital delivery stack."
        />

        <div className="eco">
          <Reveal className="eco-panel">
            <div className="eco-rows" ref={rowsRef}>
              {techRows.map((row, r) => (
                <div key={r} className={`eco-row ${r % 2 ? 'is-reverse' : ''}`}>
                  <ul className="eco-track">
                    {/* Three copies so the loop is seamless; only the first is read out */}
                    {[...row, ...row, ...row].map((t, i) => (
                      <li key={i} aria-hidden={i >= row.length || undefined}>
                        <div className="tech">
                          <TechLogo name={t.logo} className="tech-logo" />
                          <span>{t.name}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Clients() {
  return (
    <section id="clients" className="section section-tight">
      <div className="container">
        <SectionHead num="04" label="Our clients" title="Trusted by" accent="growing businesses" />
      </div>
      <ClientMarquee />
    </section>
  )
}

function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <SectionHead num="05" label="How we work" title="Our working" accent="process" />

        <ProcessSteps steps={process} />
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      {SHOW_MARQUEE && <Marquee />}
      <About />
      <Services />
      <Technologies />
      <Clients />
      <Process />
      <Contact />
    </>
  )
}
