import Reveal from './Reveal'

// Section label, heading with a gradient accent, and an optional intro on the right.
export default function SectionHead({ num, label, title, accent, intro }) {
  return (
    <div className="section-head">
      <div>
        <Reveal as="span" className="label"><b>{num}</b> {label}</Reveal>
        <Reveal as="h2" variant="mask" className="section-title">
          {title} <span className="gradient-text">{accent}</span>
        </Reveal>
      </div>
      {intro && <Reveal as="p" delay={150} className="section-intro">{intro}</Reveal>}
    </div>
  )
}
