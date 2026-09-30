import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react'
import { company } from '../data/site'
import Icon from './Icon'
import Logo from './Logo'
import Magnetic from './Magnetic'
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

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#clients', label: 'Clients' },
  { href: '/#process', label: 'Process' },
  { href: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const mobile = useSyncExternalStore(subscribeMobile, isMobile, notMobile)
  const [active, setActive] = useState(null)
  const [hovered, setHovered] = useState(null)
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
    const sections = links.map((l) => document.getElementById(l.href.slice(2))).filter(Boolean)
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
  const target = hovered ?? active
  useLayoutEffect(() => {
    const list = listRef.current
    const pill = indicatorRef.current
    const place = () => {
      const link = target && list.querySelector(`a[href="${target}"]`)
      pill.classList.toggle('is-shown', Boolean(link))
      if (!link) return
      pill.style.setProperty('--x', `${link.offsetLeft}px`)
      pill.style.setProperty('--w', `${link.offsetWidth}px`)
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
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={goTo}
                onPointerEnter={() => setHovered(l.href)}
                className={active === l.href ? 'is-active' : undefined}
                aria-current={active === l.href ? 'true' : undefined}
                style={{ '--i': i }}
              >
                <span className="nav-link-text" data-text={l.label}>{l.label}</span>
                <span className="nav-arrow" aria-hidden="true"><Icon name="arrow" size={18} /></span>
              </a>
            ))}

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
              onClick={() => setOpen(!open)}
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
