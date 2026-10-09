import { licences } from '../data/site'
import Icon from './Icon'
import Reveal from './Reveal'
import TechLogo from './TechLogo'

// The grid of licences Tribox resells (data in data/site.js `licences`). Shown on the home page
// under "How we work" and on the Licenses & Partner Authority service page.
export default function LicenceGrid() {
  return (
    <ul className="licences-grid">
      {licences.items.map((l, i) => (
        <Reveal as="li" key={l.name} delay={(i % 4) * 80} className="licence">
          {l.logo
            ? <TechLogo name={l.logo} className="licence-logo" />
            : <span className="licence-logo licence-icon"><Icon name={l.icon} size={26} /></span>}
          <strong>{l.name}</strong>
          <span>{l.text}</span>
          <em>{licences.badge}</em>
        </Reveal>
      ))}
    </ul>
  )
}
