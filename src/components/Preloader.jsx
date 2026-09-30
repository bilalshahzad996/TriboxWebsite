import { useEffect, useState, useSyncExternalStore } from 'react'
import { BrandBars } from './Logo'

// Whether the intro plays is decided before first paint by public/theme-init.js.
const noSubscribe = () => () => {}
const introSkipped = () => document.documentElement.dataset.intro === 'skip'
// The prerendered page includes the intro; CSS hides it when skipped
const introInBuild = () => false

// Short intro screen: the Tribox logo wipes in, its bars slide into place, then the panel lifts away.
export default function Preloader() {
  const skipped = useSyncExternalStore(noSubscribe, introSkipped, introInBuild)
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    if (skipped || finished) return
    const t = setTimeout(() => setFinished(true), 2100)
    return () => clearTimeout(t)
  }, [skipped, finished])

  if (skipped || finished) return null
  return (
    <div className="preloader" aria-hidden="true">
      <div className="preloader-inner brand">
        <span className="brand-word preloader-word" />
        <BrandBars className="bars" />
      </div>
    </div>
  )
}
