import { useEffect, useRef } from 'react'

// A number that counts up from 0 the first time it comes into view. The real value is in the
// HTML from the start (search engines, screen readers, no JavaScript); the count only plays in
// the browser, and never for visitors who prefer reduced motion. If the number sits inside an
// element that fades in (class "intro"), counting starts as that fade begins, so it never waits on 0.
export default function CountUp({ value, duration = 900 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    let timer = 0

    const count = () => {
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration)
        el.textContent = String(Math.round((1 - (1 - p) ** 3) * value)) // ease-out
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        // Time left before the surrounding fade-in starts (0 if there is none or it has begun)
        const fade = el.closest('.intro')?.getAnimations?.()[0]
        const wait = fade ? Math.max(0, (fade.effect?.getTiming().delay ?? 0) - (fade.currentTime ?? 0)) : 0
        timer = setTimeout(count, wait)
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
  }, [value, duration])

  return <span ref={ref}>{value}</span>
}
