import { useEffect, useSyncExternalStore } from 'react'
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

// The current theme is the data-theme attribute on <html>
function subscribe(onChange) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  return () => observer.disconnect()
}
const currentTheme = () => document.documentElement.dataset.theme || 'light'
// The prerendered page is built as 'light'; CSS shows the right icon until the app loads
const buildTheme = () => 'light'

// The initial theme (saved choice, else the system setting) is set on <html> by the
// script in index.html, before first paint.
export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, currentTheme, buildTheme)
  const next = theme === 'dark' ? 'light' : 'dark'

  // Follow system changes (e.g. automatic dark mode at night) until the visitor picks a theme.
  useEffect(() => {
    const mq = window.matchMedia(SYSTEM_DARK)
    const onChange = (e) => {
      if (savedTheme()) return
      applyTheme(e.matches ? 'dark' : 'light')
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
  }

  return (
    <button className="theme-toggle" onClick={toggle} aria-label={`Switch to ${next} theme`} title={`Switch to ${next} theme`}>
      <Icon name="sun" size={20} className="icon-sun" />
      <Icon name="moon" size={20} className="icon-moon" />
    </button>
  )
}
