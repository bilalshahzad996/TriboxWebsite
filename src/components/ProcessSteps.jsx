import Icon from './Icon'
import Reveal from './Reveal'

// Numbered timeline: a gradient line with a badge per step, and a card under each badge.
// `steps`: [{ title, text, icon? }] — `icon` is a name from components/Icon.jsx.
// Used by the home page, the service pages and the careers page.
export default function ProcessSteps({ steps, className = '' }) {
  return (
    <Reveal className={`process ${className}`}>
      <div className="process-line" aria-hidden="true"><span /></div>
      {steps.map((p, i) => {
        const num = String(i + 1).padStart(2, '0')
        return (
          <div key={p.title} className="process-step" style={{ '--i': i }}>
            <span className="process-dot">{num}</span>
            <div className="process-card" data-num={num}>
              {p.icon && <span className="process-icon"><Icon name={p.icon} size={22} /></span>}
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          </div>
        )
      })}
    </Reveal>
  )
}
