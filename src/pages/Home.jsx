import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { company, mapsUrl, marquee, highlights, services, technologies, clients, process } from '../data/site'
import Icon from '../components/Icon'
import BrandLogo from '../components/BrandLogo'
import TechLogo from '../components/TechLogo'
import { BrandBars } from '../components/Logo'
import Reveal from '../components/Reveal'
import Magnetic from '../components/Magnetic'
import TiltCard from '../components/TiltCard'
import ParticleField from '../components/ParticleField'

// The three offset bars from the Tribox logo.
function Bars({ className = '' }) {
  return <BrandBars className={`bars ${className}`} />
}

function ServiceMark({ service, size = 26 }) {
  return service.logo
    ? <BrandLogo name={service.logo} className={service.logo === 'odoo' ? 'mark-wide' : 'mark'} />
    : <Icon name={service.icon} size={size} />
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
// Outer ring: product icons (TechLogo) mixed with service icons until the rest are supplied
const orbitOuter = [
  { title: 'Point of Sales', logo: 'pos', name: 'Point of Sales' },
  { title: 'Human Resource Management', logo: 'hr', name: 'Human Resource Management' },
  ...services.filter((s) => s.icon === 'invoice'),
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

function SectionHead({ num, label, title, accent, intro }) {
  return (
    <div className="section-head">
      <div>
        <Reveal as="span" className="label"><b>{num}</b> {label}</Reveal>
        <Reveal as="h2" variant="mask" className="section-title">
          {title} <span className="gradient-text">{accent}</span>
        </Reveal>
      </div>
      {intro && <Reveal as="p" delay={150} className="section-intro">{intro}</Reveal>}
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
              <TiltCard className={`svc ${s.badge ? 'svc-featured' : ''}`}>
                <div className="svc-top">
                  <span className="svc-logo"><ServiceMark service={s} /></span>
                  <span className="svc-num">{String(i + 1).padStart(2, '0')}</span>
                </div>
                {s.badge && <span className="svc-badge">{s.badge}</span>}
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="tags">
                  {s.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
                <a href="#contact" className="svc-link" aria-label={`Enquire about ${s.title}`}>
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
  const row = [...clients, ...clients, ...clients, ...clients]
  return (
    <section id="clients" className="section section-tight">
      <div className="container">
        <SectionHead num="04" label="Our clients" title="Trusted by" accent="growing businesses" />
      </div>
      <Reveal className="logo-marquee">
        <div className="logo-track">
          {row.map((c, i) => (
            <div key={i} className="client" aria-hidden={i >= clients.length}>
              <img src={c.logo} alt={c.name} />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <SectionHead num="05" label="How we work" title="Our working" accent="process" />

        <Reveal className="process">
          <div className="process-line"><span /></div>
          {process.map((p, i) => (
            <div key={p.title} className="process-step" style={{ '--i': i }}>
              <span className="process-dot">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

const emptyForm = { name: '', company: '', email: '', phone: '', service: '', message: '', botcheck: '' }

// Where enquiries are sent. Set these in a .env file (see .env.example).
// Without an endpoint the form falls back to opening the visitor's email app.
const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT
const FORM_ACCESS_KEY = import.meta.env.VITE_CONTACT_ACCESS_KEY

const statusMessages = {
  success: 'Thank you! Your message has been sent — our team will get back to you shortly.',
  mailto: 'Thanks! Your email app should open with your message ready to send.',
  error: `Sorry, something went wrong. Please try again or email us at ${company.email}.`,
}

function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle')
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.botcheck) return // honeypot field: only bots fill it in

    const subject = `Website enquiry${form.service ? `: ${form.service}` : ''} from ${form.name}`

    if (!FORM_ENDPOINT) {
      const body = [
        `Name: ${form.name}`,
        `Company: ${form.company || '-'}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || '-'}`,
        `Service: ${form.service || '-'}`,
        '',
        form.message,
      ].join('\n')
      window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setStatus('mailto')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...(FORM_ACCESS_KEY && { access_key: FORM_ACCESS_KEY }),
          subject,
          from_name: `${company.name} website`,
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          service: form.service,
          message: form.message,
        }),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setStatus('success')
      setForm(emptyForm)
    } catch {
      setStatus('error')
    }
  }

  const sending = status === 'sending'

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal as="span" className="label"><b>06</b> Contact</Reveal>
        <Reveal as="h2" variant="mask" className="cta-title">
          Tell us about <span className="gradient-text animated">your project</span>
        </Reveal>

        <div className="contact-grid">
          <Reveal as="form" variant="left" className="contact-form" onSubmit={handleSubmit}>
            <div className="form-status" role="status" aria-live="polite">
              {statusMessages[status] && (
                <p className={`form-message ${status === 'error' ? 'is-error' : ''}`}>{statusMessages[status]}</p>
              )}
            </div>
            <div className="form-row">
              <label className="field">
                <input name="name" autoComplete="name" maxLength={100} placeholder=" " value={form.name} onChange={update} required />
                <span>Your name *</span>
              </label>
              <label className="field">
                <input name="company" autoComplete="organization" maxLength={120} placeholder=" " value={form.company} onChange={update} />
                <span>Company name</span>
              </label>
            </div>
            <div className="form-row">
              <label className="field">
                <input type="email" name="email" autoComplete="email" maxLength={150} placeholder=" " value={form.email} onChange={update} required />
                <span>Email address *</span>
              </label>
              <label className="field">
                <input type="tel" name="phone" autoComplete="tel" maxLength={30} placeholder=" " value={form.phone} onChange={update} />
                <span>Phone number</span>
              </label>
            </div>
            <label className="field">
              <select name="service" value={form.service} onChange={update} className={form.service ? 'filled' : ''}>
                <option value="" />
                {services.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
                <option value="Other">Something else</option>
              </select>
              <span>What do you need help with?</span>
            </label>
            <label className="field">
              <textarea name="message" rows="4" maxLength={5000} placeholder=" " value={form.message} onChange={update} required />
              <span>Tell us about your project *</span>
            </label>
            {/* Honeypot: hidden from people, catches spam bots */}
            <input
              type="text"
              name="botcheck"
              className="honeypot"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={form.botcheck}
              onChange={update}
            />
            <p className="form-note">
              By sending this form you agree to our <Link to="/privacy-policy">Privacy Policy</Link>.
            </p>
            <Magnetic strength={0.2}>
              <button type="submit" className="btn btn-primary" disabled={sending}>
                {sending ? 'Sending…' : 'Send message'} <Icon name="arrow" size={18} />
              </button>
            </Magnetic>
          </Reveal>

          <Reveal variant="right" delay={150} className="contact-info">
            <a href={`mailto:${company.email}`} className="info-card">
              <span className="info-icon"><Icon name="mail" size={22} /></span>
              <div><span className="label">Email</span><strong>{company.email}</strong></div>
            </a>
            <div className="info-card">
              <span className="info-icon"><Icon name="pin" size={22} /></span>
              <div>
                <span className="label">Offices</span>
                {company.offices.map((o) => (
                  <a
                    key={o.city}
                    className="office"
                    href={mapsUrl(o.address)}
                    target="_blank"
                    rel="noreferrer"
                    title="Open in Google Maps"
                  >
                    <strong>{o.city} <span aria-hidden="true">↗</span></strong>
                    <small>{o.address}</small>
                  </a>
                ))}
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon"><Icon name="clock" size={22} /></span>
              <div><span className="label">Office hours</span><strong>{company.hours}</strong></div>
            </div>
            {company.social.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="info-card">
                <span className="info-icon"><Icon name="users" size={22} /></span>
                <div><span className="label">Follow us</span><strong>{s.label} ↗</strong></div>
              </a>
            ))}
          </Reveal>
        </div>
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
