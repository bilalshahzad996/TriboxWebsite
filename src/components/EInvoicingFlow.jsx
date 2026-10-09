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

// Small line icons, drawn in a 56 x 56 box.
const icons = {
  building: (
    <>
      <path d="M14 48V16l16-8 16 8v32" /><path d="M14 48h32" /><path d="M22 20h4M22 28h4M22 36h4M34 20h4M34 28h4M34 36h4" />
    </>
  ),
  invoice: (
    <>
      <path d="M14 6h20l10 10v34H14z" /><path d="M34 6v10h10" /><path d="M20 26h18M20 33h18M20 40h12" />
    </>
  ),
  server: (
    <>
      <rect x="10" y="6" width="36" height="14" rx="3" /><rect x="10" y="22" width="36" height="14" rx="3" /><rect x="10" y="38" width="36" height="14" rx="3" />
      <path d="M16 13h6M16 29h6M16 45h6" />
    </>
  ),
  shield: (
    <>
      <path d="M28 6l18 6v14c0 12-8 20-18 24C18 46 10 38 10 26V12z" /><path d="M20 28l6 6 10-12" />
    </>
  ),
  idcard: (
    <>
      <rect x="8" y="12" width="40" height="32" rx="5" /><circle cx="22" cy="26" r="5" /><path d="M14 38c1-5 4-7 8-7s7 2 8 7M34 24h8M34 31h8" />
    </>
  ),
  database: (
    <>
      <ellipse cx="28" cy="13" rx="16" ry="6" /><path d="M12 13v30c0 3 7 6 16 6s16-3 16-6V13" /><path d="M12 28c0 3 7 6 16 6s16-3 16-6" />
    </>
  ),
  truck: (
    <>
      <path d="M6 14h28v26H6zM34 22h10l6 8v10H34z" /><circle cx="17" cy="42" r="5" /><circle cx="42" cy="42" r="5" />
    </>
  ),
  desk: (
    <>
      <rect x="22" y="6" width="28" height="20" rx="3" /><path d="M36 26v6M30 32h12" /><circle cx="14" cy="18" r="5" /><path d="M6 44c0-8 4-12 8-12s6 2 8 4M4 50h48M10 50v-8" />
    </>
  ),
  bank: (
    <>
      <path d="M6 22L28 8l22 14z" /><path d="M12 26v18M24 26v18M32 26v18M44 26v18M8 48h40" />
    </>
  ),
  cloud: (
    <>
      <path d="M16 42a10 10 0 010-20 14 14 0 0127-4 11 11 0 011 24z" /><path d="M22 32h12M22 38h12" />
    </>
  ),
}

function Icon({ name, x, y, scale = 1 }) {
  return <g className="dg-ico" transform={`translate(${x} ${y}) scale(${scale})`}>{icons[name]}</g>
}

// A corner card: its header, then whatever is drawn inside it.
function Card({ x, y, w = 300, h = 212, corner, title, role, children }) {
  return (
    <g>
      <rect className="dg-card" x={x} y={y} width={w} height={h} rx="18" />
      <text x={x + 22} y={y + 34} className="dg-head">
        <tspan className="dg-corner">{corner} | </tspan>{title}
      </text>
      {role && <text x={x + 22} y={y + 54} className="dg-head">{role}</text>}
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
          <linearGradient id={g('text')} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" className="dg-stop-a" /><stop offset="1" className="dg-stop-c" />
          </linearGradient>
          <marker id={g('arrow')} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M1 1l8 4-8 4z" className="dg-arrow-head" />
          </marker>
        </defs>

        {/* Central frame holding the two service providers */}
        <rect className="dg-frame" x="350" y="0" width="330" height="500" rx="26" fill={`url(#${g('frame')})`} />
        <rect className="dg-mid" x="364" y="222" width="302" height="56" />
        <T x="378" y="246" lines={['SECURE DATA', 'NETWORK TRANSFER']} cls="dg-mid-text" step={14} />
        <rect className="dg-pill" x="540" y="238" width="112" height="26" rx="13" />
        <text x="596" y="255" className="dg-pill-text" textAnchor="middle">SECURE TRANSMIT →</text>

        {/* Corner 1: Supplier */}
        <Card x={10} y={14} corner="CORNER 1" title="SUPPLIER" role="(SUBMITTER)">
          <Icon name="building" x={32} y={76} scale={1.05} />
          <T x={112} y={96} lines={['Generates', 'standardised', 'e-invoice data.']} cls="dg-text" />
          <Icon name="invoice" x={36} y={148} scale={0.8} />
          <T x={112} y={168} lines={['Transmits data to', 'first Service Provider.']} cls="dg-text" />
        </Card>

        {/* Corner 2: Service Provider A */}
        <Card x={364} y={14} w={302} corner="CORNER 2" title="SERVICE PROVIDER A" role="(VALIDATOR)">
          <Icon name="server" x={380} y={74} scale={0.95} />
          <T x={440} y={90} lines={['Data is validated against', "standards. Receiving party's", 'identity is verified.']} cls="dg-text" />
          <rect className="dg-check" x={380} y={148} width={270} height={52} rx="12" />
          <Icon name="idcard" x={390} y={156} scale={0.65} />
          <text x={436} y={170} className="dg-check-title">IDENTITY DIRECTORY CHECK</text>
          <text x={436} y={188} className="dg-text">Check recipient ID.</text>
        </Card>

        {/* Corner 3: Service Provider B */}
        <Card x={364} y={278} w={302} corner="CORNER 3" title="SERVICE PROVIDER B" role="(DELIVERER)">
          <Icon name="database" x={380} y={340} scale={0.95} />
          <T x={440} y={356} lines={['Receives and prepares', 'e-invoice for delivery.']} cls="dg-text" />
          <Icon name="truck" x={380} y={414} scale={0.7} />
          <T x={440} y={434} lines={['Delivers data to the Buyer.']} cls="dg-text" />
        </Card>

        {/* Corner 4: Receiver */}
        <Card x={10} y={278} corner="CORNER 4" title="RECEIVER" role="(BUYER)">
          <Icon name="desk" x={30} y={340} scale={1.05} />
          <T x={112} y={358} lines={["Buyer's business", 'systems populated', 'with received', 'e-invoice.']} cls="dg-text" />
          <T x={112} y={430} lines={['Automatic updates', 'and processing.']} cls="dg-text" />
        </Card>

        {/* Central tax authority */}
        <rect className="dg-tax" x="722" y="14" width="268" height="472" rx="24" />
        <T x={856} y={64} lines={['CENTRAL TAX', 'AUTHORITY', 'INTEGRATION']} cls="dg-tax-title" step={26} anchor="middle" />
        <rect className="dg-card" x="738" y="156" width="236" height="316" rx="16" />
        <text x="756" y="190" className="dg-head">TAX DATA</text>
        <text x="756" y="208" className="dg-head">SUBMISSION</text>
        <T x={756} y={232} lines={['Accredited providers', 'transmit required tax', 'data extracts.']} cls="dg-text" />
        <Icon name="bank" x={760} y={304} scale={1.05} />
        <Icon name="cloud" x={846} y={304} scale={1.05} />
        <text x="756" y="400" className="dg-head">CENTRAL TAX</text>
        <text x="756" y="418" className="dg-head">PLATFORM</text>
        <T x={756} y={440} lines={['Collects, processes, and', 'stores tax data.']} cls="dg-text" />

        {/* Connectors */}
        <g className="dg-line" markerEnd={`url(#${g('arrow')})`}>
          <path d="M310 120H364" />
          <path d="M666 120H690a14 14 0 0114 14V196a14 14 0 0014 14H738" />
          <path d="M666 384H738" />
          <path d="M364 384H310" />
        </g>
        <path className="dg-line" d="M515 226V278" markerEnd={`url(#${g('arrow')})`} />
        <Badge x={337} y={120} n={1} />
        <Badge x={690} y={120} n={2} />
        <Badge x={716} y={210} n={5} />
        <Badge x={690} y={384} n={3} />
        <Badge x={716} y={384} n={5} />
        <Badge x={337} y={384} n={4} />
      </svg>
    </Reveal>
  )
}
