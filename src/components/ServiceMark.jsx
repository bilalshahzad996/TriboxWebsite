import BrandLogo from './BrandLogo'
import Icon from './Icon'
import TechLogo from './TechLogo'

// A service's logo (full-colour product logo, or single-colour brand logo), or its icon
// when it has neither (see services in data/site.js).
export default function ServiceMark({ service, size = 26 }) {
  // The Odoo wordmark is wide, so it gets the wide size
  if (service.techLogo) return <TechLogo name={service.techLogo} className={service.techLogo === 'odooWordmark' ? 'mark-wide' : 'mark'} />
  if (service.logo) return <BrandLogo name={service.logo} className={service.logo === 'odoo' ? 'mark-wide' : 'mark'} />
  // App-style icon: a white symbol on a rounded gradient square, sized like the logos (.mark)
  if (service.tile) {
    const [from, to] = service.tile
    return (
      <span className="mark app-tile" style={{ '--tile-from': from, '--tile-to': to }}>
        <Icon name={service.icon} size={size} />
      </span>
    )
  }
  return <Icon name={service.icon} size={size} />
}
