import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Cursor from './Cursor'
import Preloader from './Preloader'
import ScrollProgress from './ScrollProgress'

// True only until the first scroll decision after a browser refresh
let reloadPending = performance.getEntriesByType?.('navigation')[0]?.type === 'reload'

// Scroll handling:
// - a shared link like /#contact opens at that section, then the #hash is dropped from the address
// - a refresh always starts at the top (the browser would otherwise jump back to the last #section)
// - in-page links scroll smoothly without adding #hash to the address
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
  }, [])

  useEffect(() => {
    // Read the live address: the #hash is removed from it below without telling the router
    const current = window.location.hash
    const target = current && !reloadPending ? document.getElementById(decodeURIComponent(current.slice(1))) : null
    reloadPending = false
    if (target) {
      target.scrollIntoView({ behavior: 'instant' })
      // Web fonts can reflow the page above the section once loaded, so line it up again
      document.fonts?.ready.then(() => target.scrollIntoView({ behavior: 'instant' }))
    } else {
      window.scrollTo(0, 0)
    }
    if (current) history.replaceState(history.state, '', pathname + window.location.search)
  }, [pathname, hash])

  useEffect(() => {
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = e.target.closest('a[href*="#"]')
      if (!link || link.target) return
      const url = new URL(link.href)
      if (url.origin !== location.origin || url.pathname !== location.pathname) return
      const target = document.getElementById(url.hash.slice(1))
      if (!target) return
      e.preventDefault()
      target.scrollIntoView()
      if (target.tabIndex >= 0 || target.id === 'main') target.focus({ preventScroll: true })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}

export default function Layout() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Preloader />
      <ScrollProgress />
      <Cursor />
      <ScrollManager />
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
