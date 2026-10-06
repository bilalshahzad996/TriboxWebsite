import { useEffect } from 'react'
import Contact from './Contact'
import Icon from './Icon'
import Magnetic from './Magnetic'
import ProcessSteps from './ProcessSteps'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import TechLogo from './TechLogo'
import TiltCard from './TiltCard'

// Layout shared by every service page (e.g. /services/business-central/, /services/odoo/).
// All wording comes from the page's data file in src/data/ (listed in data/servicePages.js).

const num = (i) => String(i + 1).padStart(2, '0')

function Hero({ page }) {
  const { hero, panel } = page
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
              <a href="#contact" className="btn btn-primary">
                {hero.primary} <Icon name="arrow" size={18} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#capabilities" className="btn btn-ghost">{hero.secondary}</a>
            </Magnetic>
          </div>
        </div>

        <div className="modules-panel intro" style={{ '--d': 3 }}>
          <div className="modules-head">
            {/* A product logo when there is one, otherwise a plain icon */}
            {panel.logo
              ? <TechLogo name={panel.logo} className="modules-logo" />
              : <span className="modules-logo tech-icon"><Icon name={panel.icon} size={24} /></span>}
            <div>
              <strong>{panel.title}</strong>
              <small>{panel.subtitle}</small>
            </div>
          </div>
          <ul className="modules">
            {hero.modules.map((m) => (
              <li key={m}><Icon name="check" size={16} /> {m}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Challenges({ page }) {
  const { title, accent } = page.headings.challenges
  return (
    <section className="section">
      <div className="container">
        <SectionHead num="01" label="Key challenges" title={title} accent={accent} />
        <div className="card-grid cols-4">
          {page.challenges.map((c, i) => (
            <Reveal key={c.title} delay={i * 90} className="card">
              <span className="card-tag">{c.tag}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Approach({ page }) {
  const { approach } = page
  return (
    <section className="section">
      <div className="container approach">
        <div>
          <Reveal as="span" className="label"><b>02</b> {approach.label}</Reveal>
          <Reveal as="h2" variant="mask" className="section-title">
            {approach.title} <span className="gradient-text">{approach.accent}</span>
          </Reveal>
          <Reveal as="p" delay={100} className="approach-lead">{approach.lead}</Reveal>
          <Reveal as="p" delay={150}>{approach.text}</Reveal>
        </div>
        <Reveal variant="right" delay={150} className="deliver">
          <span className="label">What we deliver</span>
          <ul>
            {approach.delivers.map((d) => (
              <li key={d}><span className="deliver-icon"><Icon name="check" size={16} /></span> {d}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

function Capabilities({ page }) {
  const { title, accent, intro } = page.headings.capabilities
  return (
    <section id="capabilities" className="section">
      <div className="container">
        <SectionHead num="03" label="Capabilities" title={title} accent={accent} intro={intro} />
        <div className="bento">
          {page.capabilities.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 110}>
              <TiltCard className="svc">
                <div className="svc-top">
                  <span className="svc-logo"><Icon name={c.icon} size={26} /></span>
                  <span className="svc-num">{num(i)}</span>
                </div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <ul className="points">
                  {c.points.map((p) => (
                    <li key={p}><Icon name="check" size={16} /> {p}</li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process({ page }) {
  const { title, accent } = page.headings.process
  return (
    <section className="section">
      <div className="container">
        <SectionHead num="04" label="Process" title={title} accent={accent} />
        <ProcessSteps steps={page.process} className="process-4" />
      </div>
    </section>
  )
}

function Tools({ page }) {
  const { title, accent } = page.headings.tools
  return (
    <section className="section section-tight">
      <div className="container">
        <SectionHead num="05" label="Tools & technologies" title={title} accent={accent} />
        <Reveal as="ul" className="tool-grid">
          {page.tools.map((t) => (
            <li key={t.name} className="tech">
              {/* A product logo when there is one, otherwise a plain icon */}
              {t.logo
                ? <TechLogo name={t.logo} className="tech-logo" />
                : <span className="tech-logo tech-icon"><Icon name={t.icon} size={22} /></span>}
              <span>{t.name}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

function Industries({ page }) {
  const { title, accent } = page.headings.industries
  return (
    <section className="section">
      <div className="container">
        <SectionHead num="06" label="Industries" title={title} accent={accent} />
        <div className="card-grid cols-4">
          {page.industries.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 90} className="card">
              <span className="card-num">{num(i)}</span>
              <h3>{ind.title}</h3>
              <p>{ind.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Engagements({ page }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHead num="07" label="Engagement models" title="Two ways to" accent="work with us" />
        <div className="card-grid cols-2">
          {page.engagements.map((e, i) => (
            <Reveal key={e.title} delay={i * 110} className="card engage">
              <span className="card-tag">{e.kind}</span>
              <h3>{e.title}</h3>
              <p>{e.text}</p>
              <div className="engage-foot">
                <span className="engage-best">{e.best}</span>
                <a href="#contact" className="text-link">Let's talk <Icon name="arrow" size={18} /></a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Faq({ page }) {
  return (
    <section className="section">
      <div className="container faq-grid">
        <div>
          <Reveal as="span" className="label"><b>08</b> FAQs</Reveal>
          <Reveal as="h2" variant="mask" className="section-title">
            Frequently asked <span className="gradient-text">questions</span>
          </Reveal>
          <Reveal as="p" delay={100}>
            {page.headings.faqPrompt}{' '}
            <a href="#contact" className="text-link">Ask our team <Icon name="arrow" size={18} /></a>
          </Reveal>
        </div>
        <Reveal className="faq">
          {page.faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}<span className="faq-icon" aria-hidden="true" /></summary>
              <p>{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default function ServicePage({ page }) {
  // The built page already has this title; this covers the development server.
  useEffect(() => {
    const previous = document.title
    document.title = page.meta.title
    return () => { document.title = previous }
  }, [page])

  return (
    <>
      <Hero page={page} />
      <Challenges page={page} />
      <Approach page={page} />
      <Capabilities page={page} />
      <Process page={page} />
      <Tools page={page} />
      <Industries page={page} />
      <Engagements page={page} />
      <Faq page={page} />
      <Contact num="09" topic={page.enquiry.topic} options={page.enquiry.options} />
    </>
  )
}
