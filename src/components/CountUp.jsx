import { useEffect, useRef } from 'react'

// A number that counts up from 0 the first time it comes into view. The real value is in the
// HTML from the start (search engines, screen readers, no JavaScript); the count only plays in
// the browser, after `delay` ms, and never for visitors who prefer reduced motion.
export default function CountUp({ value, duration = 1400, delay = 0 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    let timer = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        el.textContent = '0'
        timer = setTimeout(() => {
          const start = performance.now()
          const tick = (now) => {
            const p = Math.min(1, (now - start) / duration)
            el.textContent = String(Math.round((1 - (1 - p) ** 3) * value)) // ease-out
            if (p < 1) raf = requestAnimationFrame(tick)
          }
          raf = requestAnimationFrame(tick)
        }, delay)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      clearTimeout(timer)
      cancelAnimationFrame(raf)
      el.textContent = String(value)
    }
  }, [value, duration, delay])

  return <span ref={ref}>{value}</span>
}
