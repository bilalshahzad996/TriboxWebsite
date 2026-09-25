import { useState } from 'react'
import Icon from './Icon'

const THEME_COLORS = { light: '#f7f9fc', dark: '#05060b' }

// The initial theme is set on <html> by the inline script in index.html, before first paint.
export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light')
  const next = theme === 'dark' ? 'light' : 'dark'

  const toggle = () => {
    document.documentElement.dataset.theme = next
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLORS[next])
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
