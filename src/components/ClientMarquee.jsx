import { clients } from '../data/site'
import Reveal from './Reveal'

// Client logos gliding in a continuous strip (pauses on hover). The list is repeated so the loop
// is seamless; only the first copy is read out by screen readers. Used on the home and About pages.
export default function ClientMarquee() {
  const row = [...clients, ...clients, ...clients, ...clients]
  return (
    <Reveal className="logo-marquee">
      <div className="logo-track">
        {row.map((c, i) => (
          <div key={i} className="client" aria-hidden={i >= clients.length}>
            <img src={c.logo} alt={c.name} />
          </div>
        ))}
      </div>
    </Reveal>
  )
}
