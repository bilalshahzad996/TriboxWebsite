// The three offset brand bars, traced from public/logos/tribox-logo.png.
export function BrandBars({ className = '' }) {
  return (
    <svg className={className} viewBox="558 0 193 153" aria-hidden="true">
      <rect x="558" y="0" width="134" height="49" fill="#7ddcff" />
      <rect x="617" y="52" width="134" height="49" fill="#4fafd1" />
      <rect x="593" y="104" width="134" height="49" fill="#7ddcff" />
    </svg>
  )
}

// Tribox logo: the wordmark takes the current text colour (so it works in both themes),
// followed by the brand bars.
export default function Logo() {
  return (
    <span className="brand" role="img" aria-label="Tribox">
      <span className="brand-word" />
      <BrandBars className="brand-bars" />
    </span>
  )
}
