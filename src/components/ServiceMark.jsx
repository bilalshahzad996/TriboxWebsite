import BrandLogo from './BrandLogo'
import Icon from './Icon'

// A service's product logo, or its icon when it has no logo (see services in data/site.js).
export default function ServiceMark({ service, size = 26 }) {
  return service.logo
    ? <BrandLogo name={service.logo} className={service.logo === 'odoo' ? 'mark-wide' : 'mark'} />
    : <Icon name={service.icon} size={size} />
}
