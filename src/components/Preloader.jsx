import { useEffect, useLayoutEffect, useState } from 'react'
import { BrandBars } from './Logo'

// Show the intro only on the first page view of a browser session, and never
// for visitors who prefer reduced motion. Evaluated once when the module loads.
const showIntro = (() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  try {
    if (sessionStorage.getItem('tribox-intro')) return false
    sessionStorage.setItem('tribox-intro', '1')
  } catch {
    // Storage blocked (private mode etc.) — just show the intro.
  }
  return true
})()

// Short intro screen: the Tribox bars slide in, then the panel lifts away.
export default function Preloader() {
  const [done, setDone] = useState(!showIntro)

  // Without the intro, start the hero animations straight away.
  useLayoutEffect(() => {
    if (!showIntro) document.documentElement.style.setProperty('--intro', '0.1s')
  }, [])

  useEffect(() => {
    if (done) return
    const t = setTimeout(() => setDone(true), 2100)
    return () => clearTimeout(t)
  }, [done])

  if (done) return null
  return (
    <div className="preloader" aria-hidden="true">
      <div className="preloader-inner">
        <BrandBars className="bars" />
        <span className="preloader-word">Tribox</span>
      </div>
    </div>
  )
}
