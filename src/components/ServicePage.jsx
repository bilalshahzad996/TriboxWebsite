import { useEffect, useState } from 'react'
import Contact from './Contact'
import EInvoicingFlow from './EInvoicingFlow'
import LicenceGrid from './LicenceGrid'
import Icon from './Icon'
import Magnetic from './Magnetic'
import ProcessSteps from './ProcessSteps'
import Reveal from './Reveal'
import SectionHead from './SectionHead'
import TechLogo from './TechLogo'
import TiltCard from './TiltCard'

// Layout shared by every service and product page (e.g. /services/odoo/, /products/sis-app/).
// All wording comes from the page's data file in src/data/ (listed in data/servicePages.js).

const twoDigits = (i) => String(i + 1).padStart(2, '0')

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
              <a href={hero.secondaryHref ?? '#capabilities'} className="btn btn-ghost">{hero.secondary}</a>
            </Magnetic>
          </div>
        </div>

        <div className="modules-panel intro" style={{ '--d': 3 }}>
          <div className="modules-head">
            {/* A product logo when there is one, otherwise a plain icon */}
            {panel.logo
              ? <TechLogo name={panel.logo} className="modules-logo" />
              : panel.tile
                ? <span className="modules-logo app-tile" style={{ '--tile-from': panel.tile[0], '--tile-to': panel.tile[1] }}><Icon name={panel.icon} size={24} /></span>
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

function Overview({ page, num }) {
  const { label, title, accent, subtitle, text, pillsLabel, pills, items, bestFit } = page.overview
  return (
    <section id="overview" className="section">
      <div className="container">
        <SectionHead num={num} label={label} title={title} accent={accent} intro={subtitle} />
        <div className={`overview ${bestFit ? '' : 'no-fit'}`}>
          <Reveal className="overview-lead">
            <p>{text}</p>
            {pills && pillsLabel && <strong className="overview-pills-label">{pillsLabel}</strong>}
            {pills && (
              <ul className="tags">
                {pills.map((p) => <li key={p}><span>{p}</span></li>)}
              </ul>
            )}
          </Reveal>
          {bestFit && <Reveal variant="right" delay={100} className="overview-fit">
            {bestFit.kicker && <small className="overview-kicker">{bestFit.kicker}</small>}
            <h3>{bestFit.title}</h3>
            {bestFit.text && <p>{bestFit.text}</p>}
            {bestFit.list && (
              <ul>
                {bestFit.list.map((b) => <li key={b}><Icon name="check" size={16} /> {b}</li>)}
              </ul>
            )}
            {bestFit.note && <p className="overview-note">{bestFit.note}</p>}
            {bestFit.outcome && <p className="overview-outcome">{bestFit.outcome}</p>}
          </Reveal>}
          <ul className="overview-items">
            {items.map((it, i) => (
              <Reveal as="li" key={it.title} delay={(i % 2) * 90} className={`overview-item ${it.start ? 'is-start' : ''}`}>
                <span className={`overview-num ${it.tag ? 'is-tag' : ''}`}>{it.tag ?? twoDigits(i)}</span>
                <div>
                  {it.start && <small className="overview-kicker">{it.start}</small>}
                  <strong>{it.title}</strong>
                  <span>{it.text}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Stack({ page, num }) {
  const { label, title, accent, intro, layers } = page.stack
  return (
    <section id="stack" className="section">
      <div className="container">
        <SectionHead num={num} label={label} title={title} accent={accent} intro={intro} />
        <ol className="stack">
          {layers.map((l, i) => (
            <Reveal as="li" key={l.title} delay={i * 90} className="stack-layer" style={{ '--i': i }}>
              <span className="stack-side">
                <b>{twoDigits(i)}</b>
                <small>{l.tag}</small>
              </span>
              <div className="stack-body">
                <small className="stack-title">{l.title}</small>
                <strong>{l.lead}</strong>
                <ul>
                  {l.details.map((d) => <li key={d}>{d}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Lists({ page, num }) {
  const { label, title, accent, panels } = page.lists
  return (
    <section className="section">
      <div className="container">
        <SectionHead num={num} label={label} title={title} accent={accent} />
        <div className="lists">
          {panels.map((p, i) => (
            <Reveal key={p.title} delay={i * 110} className="lists-panel">
              <h3>{p.title}</h3>
              <ol>
                {p.items.map((it, j) => (
                  <li key={it}><b>{twoDigits(j)}</b> {it}</li>
                ))}
              </ol>
              <p className="lists-note">{p.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Lens({ page, num }) {
  const { accent, tag, lead, when, features, example, edge, why, value, rule, shortcuts, current } = page.lens
  return (
    <section className="section">
      <div className="container">
        <SectionHead num={num} label="Platform fit" title="When to choose" accent={accent} />
        <div className="lens">
          <Reveal className="lens-card">
            <small className="lens-tag">{tag}</small>
            <h3>Choose when</h3>
            <p className="lens-lead">{lead}</p>
            <p>{when}</p>
            <ul>
              {features.map((f) => <li key={f}><Icon name="check" size={16} /> {f}</li>)}
            </ul>
            <p className="lens-example"><b>Example fit:</b> {example}</p>
          </Reveal>
          <Reveal variant="right" delay={100} className="lens-card lens-wins">
            <small className="lens-tag">Why it wins</small>
            <h3>{accent}</h3>
            <dl>
              <div><dt>Feature edge</dt><dd>{edge}</dd></div>
              <div><dt>Why it wins</dt><dd>{why}</dd></div>
              <div><dt>Business value</dt><dd>{value}</dd></div>
            </dl>
          </Reveal>
        </div>
        {rule && <Reveal as="p" className="lens-rule"><b>Decision rule:</b> {rule}</Reveal>}
        <Reveal as="ul" className="lens-shortcut" aria-label="Executive shortcut">
          {shortcuts.map((s, i) => (
            <li key={s.to} className={i === current ? 'is-current' : ''}>{s.need} <span aria-hidden="true">→</span> <strong>{s.to}</strong></li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

function Licensing({ page, num }) {
  const { title = 'Licensing', accent = 'categories', subtitle, intro, categories, logic, source } = page.licensing
  return (
    <section className="section">
      <div className="container">
        <SectionHead num={num} label="Licensing" title={title} accent={accent} intro={intro} />
        {subtitle && <p className="licensing-sub">{subtitle}</p>}
        <div className="card-grid cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={i * 90} className="card">
              <span className="card-num">{twoDigits(i)}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </Reveal>
          ))}
        </div>
        {logic && <Reveal as="p" className="licensing-logic"><b>Licensing decision logic:</b> {logic}</Reveal>}
        {source && <p className="licensing-source">{source}</p>}
      </div>
    </section>
  )
}

function Licences({ page, num }) {
  const { label, title, accent } = page.licences
  return (
    <section id="licences" className="section">
      <div className="container">
        <SectionHead num={num} label={label} title={title} accent={accent} />
        <LicenceGrid />
      </div>
    </section>
  )
}

function Gallery({ page, num }) {
  const { label, title, accent, intro, url, shots } = page.gallery
  const [current, setCurrent] = useState(0)
  const shot = shots[current]
  return (
    <section id="tour" className="section">
      <div className="container">
        <SectionHead num={num} label={label} title={title} accent={accent} intro={intro} />
        <Reveal className="tour">
          <div className="tour-stage" key={shot.id}>
            <div className="tour-bar" aria-hidden="true">
              <span /><span /><span />
              <em>{url}</em>
            </div>
            <div className="tour-view" style={{ aspectRatio: Math.max(1.6, shot.width / shot.height) }}>
              <img src={`/products/fleettrack/${shot.id}.webp`} width={shot.width} height={shot.height} alt={`${shot.title}: ${shot.text}`} loading="lazy" />
            </div>
          </div>
          <div className="tour-tabs" role="tablist" aria-label="Fleet Track screens">
            {shots.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === current}
                className={i === current ? 'is-active' : ''}
                onClick={() => setCurrent(i)}
              >
                <b>{twoDigits(i)}</b>
                <strong>{s.title}</strong>
                <span>{s.text}</span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Challenges({ page, num }) {
  const { title, accent } = page.headings.challenges
  return (
    <section className="section">
      <div className="container">
        <SectionHead num={num} label="Key challenges" title={title} accent={accent} />
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

function Approach({ page, num }) {
  const { approach } = page
  return (
    <section className="section">
      <div className="container approach">
        <div>
          <Reveal as="span" className="label"><b>{num}</b> {approach.label}</Reveal>
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

function Diagram({ page, num }) {
  const { label, title, accent, intro, alt } = page.diagram
  return (
    <section className="section">
      <div className="container">
        <SectionHead num={num} label={label} title={title} accent={accent} intro={intro} />
        <EInvoicingFlow alt={alt} />
      </div>
    </section>
  )
}

function Capabilities({ page, num }) {
  const { title, accent, intro } = page.headings.capabilities
  return (
    <section id="capabilities" className="section">
      <div className="container">
        <SectionHead num={num} label="Capabilities" title={title} accent={accent} intro={intro} />
        <div className="bento">
          {page.capabilities.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 110}>
              <TiltCard className="svc">
                <div className="svc-top">
                  <span className="svc-logo"><Icon name={c.icon} size={26} /></span>
                  <span className="svc-num">{twoDigits(i)}</span>
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

function Process({ page, num }) {
  const { title, accent } = page.headings.process
  return (
    <section className="section">
      <div className="container">
        <SectionHead num={num} label="Process" title={title} accent={accent} />
        <ProcessSteps steps={page.process} className="process-4" />
      </div>
    </section>
  )
}

function Tools({ page, num }) {
  const { title, accent } = page.headings.tools
  return (
    <section className="section section-tight">
      <div className="container">
        <SectionHead num={num} label="Tools & technologies" title={title} accent={accent} />
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

function Industries({ page, num }) {
  const { label = 'Industries', title, accent } = page.headings.industries
  return (
    <section id="industries" className="section">
      <div className="container">
        <SectionHead num={num} label={label} title={title} accent={accent} />
        <div className="card-grid cols-4">
          {page.industries.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 90} className="card">
              <span className="card-num">{twoDigits(i)}</span>
              <h3>{ind.title}</h3>
              <p>{ind.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Engagements({ page, num }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHead num={num} label="Engagement models" title="Two ways to" accent="work with us" />
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

function Faq({ page, num }) {
  return (
    <section className="section">
      <div className="container faq-grid">
        <div>
          <Reveal as="span" className="label"><b>{num}</b> FAQs</Reveal>
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

// Sections in page order. A page leaves one out by not having its data (e.g. product pages
// have no `tools`); the rest are numbered 01, 02… in order.
const SECTIONS = [
  { key: 'overview', Section: Overview },
  { key: 'licences', Section: Licences },
  { key: 'stack', Section: Stack },
  { key: 'lists', Section: Lists },
  { key: 'challenges', Section: Challenges },
  { key: 'approach', Section: Approach },
  { key: 'gallery', Section: Gallery },
  { key: 'lens', Section: Lens },
  { key: 'diagram', Section: Diagram },
  { key: 'capabilities', Section: Capabilities },
  { key: 'process', Section: Process },
  { key: 'tools', Section: Tools },
  { key: 'licensing', Section: Licensing },
  { key: 'industries', Section: Industries },
  { key: 'engagements', Section: Engagements },
  { key: 'faqs', Section: Faq },
]
const pad = (i) => String(i + 1).padStart(2, '0')

export default function ServicePage({ page }) {
  const sections = SECTIONS.filter((s) => page[s.key]?.length ?? page[s.key])
  // The built page already has this title; this covers the development server.
  useEffect(() => {
    const previous = document.title
    document.title = page.meta.title
    return () => { document.title = previous }
  }, [page])

  return (
    <>
      <Hero page={page} />
      {sections.map(({ key, Section }, i) => <Section key={key} page={page} num={pad(i)} />)}
      <Contact num={pad(sections.length)} topic={page.enquiry.topic} options={page.enquiry.options} />
    </>
  )
}
