import { useEffect, useState } from 'react'
import Icon from './Icon'

const THEME_COLORS = { light: '#f7f9fc', dark: '#05060b' }
const SYSTEM_DARK = '(prefers-color-scheme: dark)'

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[theme])
}

function savedTheme() {
  try {
    return localStorage.getItem('theme')
  } catch {
    return null
  }
}

// The initial theme (saved choice, else the system setting) is set on <html> by the
// inline script in index.html, before first paint.
export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light')
  const next = theme === 'dark' ? 'light' : 'dark'

  // Follow system changes (e.g. automatic dark mode at night) until the visitor picks a theme.
  useEffect(() => {
    const mq = window.matchMedia(SYSTEM_DARK)
    const onChange = (e) => {
      if (savedTheme()) return
      const system = e.matches ? 'dark' : 'light'
      applyTheme(system)
      setTheme(system)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggle = () => {
    applyTheme(next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage blocked: the choice still applies for this visit.
    }
    setTheme(next)
  }

  return (
    <button className="theme-toggle" onClick={toggle} aria-label={`Switch to ${next} theme`} title={`Switch to ${next} theme`}>
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={20} />
    </button>
  )
}
