import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Icon from './Icon'
import Logo from './Logo'
import Magnetic from './Magnetic'
import ThemeToggle from './ThemeToggle'

const MOBILE_QUERY = '(max-width: 900px)'

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
  const [mobile, setMobile] = useState(() => window.matchMedia(MOBILE_QUERY).matches)
  const [active, setActive] = useState(null)
  const [hovered, setHovered] = useState(null)
  const listRef = useRef(null)
  const indicatorRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY)
    const onChange = (e) => {
      setMobile(e.matches)
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

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''} ${open ? 'nav-open' : ''}`}>
      <div className="container">
        <div className="nav-bar">
          <a href="/#main" className="logo" onClick={close}>
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
                onClick={close}
                onPointerEnter={() => setHovered(l.href)}
                className={active === l.href ? 'is-active' : undefined}
                aria-current={active === l.href ? 'true' : undefined}
                style={{ '--i': i }}
              >
                <span className="nav-link-text" data-text={l.label}>{l.label}</span>
              </a>
            ))}
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
