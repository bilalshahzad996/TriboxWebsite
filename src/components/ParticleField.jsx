import { useEffect, useRef } from 'react'

// Animated "network" of connected dots that reacts to the mouse. Pauses when offscreen.
export default function ParticleField({ className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const mouse = { x: -9999, y: -9999 }
    let w = 0
    let h = 0
    let particles = []
    let raf = 0
    let running = true
    let colors = {}
    const readColors = () => {
      const css = getComputedStyle(document.documentElement)
      colors = { dot: css.getPropertyValue('--accent-rgb').trim(), link: css.getPropertyValue('--particle-rgb').trim() }
      if (reduce) draw()
    }
    const themeObserver = new MutationObserver(readColors)

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const widthChanged = canvas.offsetWidth !== w
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // Only re-seed when the width changes (mobile browsers resize the height while scrolling)
      if (!widthChanged && particles.length) {
        if (reduce) draw()
        return
      }
      const count = Math.round(Math.min(95, (w * h) / 13000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.6 + 0.6,
      }))
      if (reduce) draw()
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        if (!reduce) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0 || p.x > w) p.vx *= -1
          if (p.y < 0 || p.y > h) p.vy *= -1
          // Gently push dots away from the cursor
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const d = Math.hypot(dx, dy)
          if (d < 120 && d > 0) {
            p.x += (dx / d) * 1.2
            p.y += (dy / d) * 1.2
          }
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgb(${colors.dot} / 0.6)`
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 130) {
            ctx.strokeStyle = `rgb(${colors.link} / ${0.2 * (1 - d / 130)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y)
        if (dm < 200) {
          ctx.strokeStyle = `rgb(${colors.dot} / ${0.45 * (1 - dm / 200)})`
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }
      if (running && !reduce) raf = requestAnimationFrame(draw)
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    const observer = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting
      cancelAnimationFrame(raf)
      if (running) draw()
    })

    // Start once the browser is idle so the animation doesn't compete with page load.
    const start = () => {
      readColors()
      themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
      resize()
      draw()
      observer.observe(canvas)
      window.addEventListener('resize', resize)
      window.addEventListener('pointermove', onMove, { passive: true })
      document.addEventListener('pointerleave', onLeave)
    }
    const idle = window.requestIdleCallback
      ? window.requestIdleCallback(start, { timeout: 1500 })
      : setTimeout(start, 600)

    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(idle)
      clearTimeout(idle)
      cancelAnimationFrame(raf)
      observer.disconnect()
      themeObserver.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={ref} className={className} aria-hidden="true" />
}
