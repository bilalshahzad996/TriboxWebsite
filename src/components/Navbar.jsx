import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react'
import { useLocation } from 'react-router-dom'
import { company, products, services } from '../data/site'
import Icon from './Icon'
import Logo from './Logo'
import Magnetic from './Magnetic'
import ServiceMark from './ServiceMark'
import TechLogo from './TechLogo'
import ThemeToggle from './ThemeToggle'

const MOBILE_QUERY = '(max-width: 900px)'

function subscribeMobile(onChange) {
  const mq = window.matchMedia(MOBILE_QUERY)
  mq.addEventListener('change', onChange)
  return () => mq.removeEventListener('change', onChange)
}
const isMobile = () => window.matchMedia(MOBILE_QUERY).matches
// The prerendered page doesn't know the screen size; the app reads it once loaded
const notMobile = () => false

// `sub`: items shown in a dropdown (on hover or keyboard focus; listed inline on mobile).
// Links without a # are pages of their own, highlighted while you're on them.
const links = [
  {
    href: '/#services',
    label: 'Services',
    sub: services.map((s) => ({ href: s.page ?? '/#services', label: s.short, mark: <ServiceMark service={s} size={18} /> })),
  },
  {
    // No page or section of its own, so no href: it just opens the dropdown of product pages
    label: 'Products',
    sub: products.map((p) => ({ href: p.page, label: p.title, text: p.text, mark: p.logo ? <TechLogo name={p.logo} className="mark" /> : <ServiceMark service={p} size={18} /> })),
  },
  { href: '/#clients', label: 'Clients' },
  { href: '/#process', label: 'Process' },
  {
    href: '/about/',
    label: 'Company',
    sub: [
      { href: '/about/', label: 'About us', text: 'Who we are and how we work', mark: <Icon name="globe" size={18} /> },
      { href: '/careers/', label: 'Careers', text: 'Join our team', mark: <Icon name="users" size={18} /> },
    ],
  },
  // No "Contact" link: the "Let's talk" button goes there
]

// The menu link for the page you're on (e.g. Company on /careers/), or null
const isPage = (href, path) => Boolean(href) && !href.includes('#') && `${path.replace(/\/$/, '')}/` === href
const linkForPage = (path) =>
  (({ href, label } = {}) => href ?? label ?? null)(links.find((l) => isPage(l.href, path) || l.sub?.some((item) => isPage(item.href, path))))

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const pageLink = linkForPage(pathname)
  const [scrolled, setScrolled] = useState(false)
  const mobile = useSyncExternalStore(subscribeMobile, isMobile, notMobile)
  const [active, setActive] = useState(null)
  const [hovered, setHovered] = useState(null)
  // Mobile menu: the dropdown that's expanded (one at a time), by its menu key
  const [expanded, setExpanded] = useState(null)
  const listRef = useRef(null)
  const indicatorRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY)
    const onChange = (e) => {
      if (!e.matches) setOpen(false)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track which section sits in the middle of the viewport
  useEffect(() => {
    const sections = links.map((l) => l.href && document.getElementById(l.href.slice(2))).filter(Boolean)
    if (!sections.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(`/#${e.target.id}`)
          else setActive((cur) => (cur === `/#${e.target.id}` ? null : cur))
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Slide the highlight pill under the hovered link, or the current section's link
  const target = hovered ?? active ?? pageLink
  useLayoutEffect(() => {
    const list = listRef.current
    const pill = indicatorRef.current
    const place = () => {
      const link = target && list.querySelector(`.nav-link[data-key="${target}"]`)
      pill.classList.toggle('is-shown', Boolean(link))
      if (!link) return
      // Measured on screen: the Services link sits inside its dropdown wrapper
      const r = link.getBoundingClientRect()
      pill.style.setProperty('--x', `${r.left - list.getBoundingClientRect().left}px`)
      pill.style.setProperty('--w', `${r.width}px`)
    }
    place()
    const ro = new ResizeObserver(place)
    ro.observe(list)
    return () => ro.disconnect()
  }, [target])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])


  // From the open menu, jump straight to the section while the menu still covers the page,
  // then let the menu fade away (smooth-scrolling behind a closing menu looks glitchy on phones).
  const goTo = (e) => {
    if (open) {
      const url = new URL(e.currentTarget.href)
      const target = url.pathname === window.location.pathname && document.getElementById(url.hash.slice(1))
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'instant' })
      }
    }
    setOpen(false)
  }

  // Tapping the dimmed page around the menu closes it
  const onBackdrop = (e) => {
    if (open && (e.target === e.currentTarget || e.target.classList.contains('container'))) setOpen(false)
  }

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''} ${open ? 'nav-open' : ''}`} onClick={onBackdrop}>
      <div className="container">
        <div className="nav-bar">
          <a href="/#main" className="logo" onClick={goTo}>
            <Logo />
          </a>

          <nav
            id="site-menu"
            ref={listRef}
            className="nav-links"
            aria-label="Main"
            inert={mobile && !open ? true : undefined}
            onPointerLeave={() => setHovered(null)}
          >
            <span ref={indicatorRef} className="nav-indicator" aria-hidden="true" />
            {links.map((l, i) => {
              const key = l.href ?? l.label
              const isOpen = mobile && expanded === key
              // On mobile, a row with a dropdown opens and closes its list instead of navigating
              const toggle = (e) => {
                if (!mobile) return
                e.preventDefault()
                setExpanded(isOpen ? null : key)
              }
              const label = (
                <>
                  <span className="nav-link-text" data-text={l.label}>{l.label}</span>
                  {l.sub && <span className="nav-caret" aria-hidden="true" />}
                  <span className="nav-arrow" aria-hidden="true"><Icon name="arrow" size={18} /></span>
                </>
              )
              // Without an href (Products) the item is a button that only opens its dropdown
              const link = l.href ? (
                <a
                  key={key}
                  href={l.href}
                  data-key={key}
                  onClick={l.sub && mobile ? toggle : goTo}
                  onPointerEnter={() => setHovered(key)}
                  className={`nav-link ${active === l.href || pageLink === key ? 'is-active' : ''}`}
                  aria-current={pageLink === key ? 'page' : active === l.href ? 'true' : undefined}
                  aria-expanded={l.sub && mobile ? isOpen : undefined}
                  style={{ '--i': i }}
                >
                  {label}
                </a>
              ) : (
                <button
                  key={key}
                  type="button"
                  data-key={key}
                  onClick={toggle}
                  onPointerEnter={() => setHovered(key)}
                  className={`nav-link ${pageLink === key ? 'is-active' : ''}`}
                  aria-expanded={mobile ? isOpen : undefined}
                  style={{ '--i': i }}
                >
                  {label}
                </button>
              )
              if (!l.sub) return link
              return (
                <div key={key} className={`nav-item ${isOpen ? 'is-expanded' : ''}`}>
                  {link}
                  {/* Collapsed on mobile: hidden links can't be tabbed to */}
                  <div className="nav-sub" style={{ '--i': i }} inert={mobile && !isOpen ? true : undefined}>
                    {/* Long lists (Services) get two columns */}
                    <ul aria-label={l.label} className={l.sub.length > 4 ? 'is-grid' : undefined}>
                      {l.sub.map((item) => (
                        <li key={item.label}>
                          <a href={item.href} onClick={goTo}>
                            <span className="nav-sub-icon">{item.mark}</span>
                            <span className="nav-sub-text">
                              {item.label}
                              {item.text && <small>{item.text}</small>}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}

            {/* Only shown in the mobile menu */}
            <div className="nav-menu-foot" style={{ '--i': links.length }}>
              <a href="/#contact" className="btn btn-primary" onClick={goTo}>
                Let's talk <Icon name="arrow" size={18} />
              </a>
              <div className="nav-menu-chips">
                <a href={`mailto:${company.email}`}>
                  <Icon name="mail" size={16} /> {company.email}
                </a>
                {company.social.map((s) => (
                  <a key={s.label} href={s.url} target="_blank" rel="noreferrer">{s.label} ↗</a>
                ))}
              </div>
              <p className="nav-menu-offices">{company.offices.map((o) => o.city.split(',')[0]).join(' · ')}</p>
            </div>
          </nav>

          <div className="nav-actions">
            <Magnetic>
              <a href="/#contact" className="btn btn-primary btn-sm nav-cta">
                Let's talk <Icon name="arrow" size={16} />
              </a>
            </Magnetic>

            <ThemeToggle />

            <button
              className="burger"
              onClick={() => {
                setOpen(!open)
                setExpanded(null) // the menu always opens with its dropdowns closed
              }}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="site-menu"
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
