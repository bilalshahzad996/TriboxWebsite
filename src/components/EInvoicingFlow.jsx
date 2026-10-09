import { useId } from 'react'
import Reveal from './Reveal'

// The five-corner e-invoicing flow as a diagram, drawn in SVG with the site's theme colours
// (they follow light and dark mode, see the .dg-* rules in index.css). Coordinates use a
// 1000 x 500 canvas; text is wrapped by hand, one string per line.

// Text block: `lines` are stacked from (x, y), `step` px apart.
function T({ x, y, lines, cls = '', step = 16, anchor }) {
  return (
    <text x={x} y={y} className={cls} textAnchor={anchor}>
      {lines.map((l, i) => <tspan key={l} x={x} dy={i ? step : 0}>{l}</tspan>)}
    </text>
  )
}

// A numbered circle on a connector.
function Badge({ x, y, n }) {
  return (
    <g className="dg-badge" transform={`translate(${x} ${y})`}>
      <circle r="11" />
      <text y="4.5" textAnchor="middle">{n}</text>
    </g>
  )
}

// Line icons, drawn in a 56 x 56 box.
const icons = {
  building: (
    <>
      <rect x="13" y="6" width="30" height="44" rx="3" /><path d="M20 16h4M32 16h4M20 25h4M32 25h4M20 34h4M32 34h4" /><path d="M24 50v-9h8v9" />
    </>
  ),
  invoice: (
    <>
      <path d="M14 5h21l9 9v37H14z" /><path d="M35 5v9h9" /><path d="M20 26h18M20 33h18M20 40h11" />
    </>
  ),
  server: (
    <>
      <rect x="9" y="6" width="38" height="14" rx="4" /><rect x="9" y="21" width="38" height="14" rx="4" /><rect x="9" y="36" width="38" height="14" rx="4" />
      <path d="M16 13h7M16 28h7M16 43h7M38 13h2M38 28h2M38 43h2" />
    </>
  ),
  idcard: (
    <>
      <rect x="6" y="12" width="44" height="32" rx="6" /><circle cx="21" cy="26" r="5" /><path d="M12 38c1.5-5 4.5-7 9-7s7.500 2 9 7M34 24h9M34 31h9" />
    </>
  ),
  database: (
    <>
      <ellipse cx="28" cy="12" rx="16" ry="6" /><path d="M12 12v32c0 3.300 7.200 6 16 6s16-2.700 16-6V12" /><path d="M12 28c0 3.300 7.200 6 16 6s16-2.700 16-6" />
    </>
  ),
  truck: (
    <>
      <path d="M5 15h27v26H5zM32 23h11l8 9v9H32z" /><circle cx="16" cy="43" r="5" /><circle cx="42" cy="43" r="5" />
    </>
  ),
  desk: (
    <>
      <rect x="8" y="8" width="40" height="28" rx="4" /><circle cx="28" cy="19" r="4.500" /><path d="M20 31c1-4 4-5.500 8-5.500s7 1.500 8 5.500" /><path d="M28 36v8M18 46h20" />
    </>
  ),
  bank: (
    <>
      <path d="M5 21L28 7l23 14z" /><path d="M11 26v18M22 26v18M34 26v18M45 26v18M7 49h42" />
    </>
  ),
  cloud: (
    <>
      <path d="M16 43a10 10 0 010-20 14 14 0 0127-4 11 11 0 011 24z" /><path d="M22 31h12M22 37h12" />
    </>
  ),
}

// An icon centred on (cx, cy), `size` px wide.
function Icon({ name, cx, cy, size = 52 }) {
  const k = size / 56
  return <g className="dg-ico" transform={`translate(${cx - 28 * k} ${cy - 28 * k}) scale(${k})`}>{icons[name]}</g>
}

// An icon with its text, the text block centred on the icon's height.
function Row({ x, cy, icon, size, lines }) {
  return (
    <g>
      <Icon name={icon} cx={x + 38} cy={cy} size={size} />
      <T x={x + 90} y={cy - ((lines.length - 1) * 16) / 2 + 4.500} lines={lines} cls="dg-text" />
    </g>
  )
}

// A corner card: its header, then whatever is drawn inside it.
function Card({ x, y, w = 300, h = 212, corner, title, role, children }) {
  return (
    <g>
      <rect className="dg-card" x={x} y={y} width={w} height={h} rx="18" />
      <text x={x + 24} y={y + 34} className="dg-head">
        <tspan className="dg-corner">{corner} | </tspan>{title}
      </text>
      {role && <text x={x + 24} y={y + 54} className="dg-head">{role}</text>}
      {children}
    </g>
  )
}

export default function EInvoicingFlow({ alt }) {
  const id = useId().replace(/:/g, '')
  const g = (n) => `${id}-${n}`
  return (
    <Reveal className="dg-wrap">
      <svg className="dg" viewBox="0 0 1000 500" role="img" aria-label={alt}>
        <defs>
          <linearGradient id={g('frame')} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" className="dg-stop-a" /><stop offset="0.55" className="dg-stop-b" /><stop offset="1" className="dg-stop-c" />
          </linearGradient>
          <linearGradient id={g('go')} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" className="dg-stop-a" /><stop offset="1" className="dg-stop-c" />
          </linearGradient>
          <marker id={g('arrow')} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0 1l10 4-10 4z" className="dg-arrow-head" />
          </marker>
        </defs>

        {/* Central frame holding the two service providers */}
        <rect className="dg-frame" x="350" y="0" width="330" height="500" rx="26" fill={`url(#${g('frame')})`} />
        {/* The secure transfer between the two providers: a label pill centred between them */}
        <rect className="dg-secure" x="385" y="239" width="264" height="26" rx="13" />
        <g className="dg-lock" transform="translate(401 245)">
          <rect x="0" y="6" width="12" height="9" rx="2.500" /><path d="M2.500 6V4.500a3.500 3.500 0 017 0V6" />
        </g>
        <text x="421" y="256" className="dg-secure-text">SECURE DATA NETWORK TRANSFER</text>
        {/* Direction of travel: from provider A down to provider B */}
        <g className="dg-go" transform="translate(627 252)">
          <circle r="10" fill={`url(#${g('go')})`} /><path d="M0 -4.500V4M-3.500 1l3.500 3.500 3.500-3.500" />
        </g>

        {/* Corner 1: Supplier */}
        <Card x={10} y={14} corner="CORNER 1" title="SUPPLIER" role="(SUBMITTER)">
          <Row x={10} cy={114} icon="building" lines={['Generates', 'standardised', 'e-invoice data.']} />
          <Row x={10} cy={178} icon="invoice" size={44} lines={['Transmits data to', 'first Service Provider.']} />
        </Card>

        {/* Corner 2: Service Provider A */}
        <Card x={364} y={14} w={302} corner="CORNER 2" title="SERVICE PROVIDER A" role="(VALIDATOR)">
          <Row x={364} cy={108} icon="server" lines={['Data is validated against', "standards. Receiving party's", 'identity is verified.']} />
          <rect className="dg-check" x={388} y={150} width={254} height={52} rx="12" />
          <Icon name="idcard" cx={414} cy={176} size={30} />
          <text x={440} y={172} className="dg-check-title">IDENTITY DIRECTORY CHECK</text>
          <text x={440} y={190} className="dg-text">Check recipient ID.</text>
        </Card>

        {/* Corner 3: Service Provider B */}
        <Card x={364} y={278} w={302} corner="CORNER 3" title="SERVICE PROVIDER B" role="(DELIVERER)">
          <Row x={364} cy={372} icon="database" lines={['Receives and prepares', 'e-invoice for delivery.']} />
          <Row x={364} cy={434} icon="truck" size={44} lines={['Delivers data to the Buyer.']} />
        </Card>

        {/* Corner 4: Receiver */}
        <Card x={10} y={278} corner="CORNER 4" title="RECEIVER" role="(BUYER)">
          <Row x={10} cy={378} icon="desk" lines={["Buyer's business", 'systems populated', 'with received', 'e-invoice.']} />
          <T x={100} y={440} lines={['Automatic updates', 'and processing.']} cls="dg-text" />
        </Card>

        {/* Central tax authority */}
        <rect className="dg-tax" x="770" y="14" width="220" height="472" rx="24" />
        <T x={880} y={62} lines={['CENTRAL TAX', 'AUTHORITY', 'INTEGRATION']} cls="dg-tax-title" step={25} anchor="middle" />
        <rect className="dg-card" x="784" y="150" width="192" height="322" rx="16" />
        <T x={802} y={186} lines={['TAX DATA', 'SUBMISSION']} cls="dg-head" step={18} />
        <T x={802} y={226} lines={['Accredited providers', 'transmit required tax', 'data extracts.']} cls="dg-text" />
        <Icon name="bank" cx={832} cy={332} size={48} />
        <Icon name="cloud" cx={920} cy={337} size={48} />
        <T x={802} y={396} lines={['CENTRAL TAX', 'PLATFORM']} cls="dg-head" step={18} />
        <T x={802} y={436} lines={['Collects, processes, and', 'stores tax data.']} cls="dg-text" />

        {/* Connectors: 1 supplier to A, 2 and 3 to the tax authority, 4 provider B to the buyer */}
        <g className="dg-line" markerEnd={`url(#${g('arrow')})`}>
          <path d="M310 120H350" />
          <path d="M680 120H724q12 0 12 12V198q0 12 12 12H784" />
          <path d="M680 318H724q12 0 12 12V396q0 12 12 12H784" />
          <path d="M350 384H310" />
        </g>
        <Badge x={330} y={120} n={1} />
        <Badge x={704} y={120} n={2} />
        <Badge x={762} y={210} n={5} />
        <Badge x={704} y={318} n={3} />
        <Badge x={762} y={408} n={5} />
        <Badge x={330} y={384} n={4} />
      </svg>
    </Reveal>
  )
}
