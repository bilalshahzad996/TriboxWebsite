// The Tribox "Global Presence" world map for the About page hero (public/about/global-presence.webp,
// 16:9). It already carries the Tribox logo and the office labels; glowing rings pulse on top of
// each location. `x` and `y` are percentages of the image; `big` marks the head office.
const spots = [
  { name: 'Calgary', x: 17.2, y: 34.0, delay: 0.4 },
  { name: 'Portugal', x: 41.0, y: 44.8, delay: 1.4, future: true },
  { name: 'Lahore', x: 63.6, y: 41.0, delay: 0.8 },
  { name: 'Karachi', x: 65.7, y: 44.8, delay: 1.6 },
  { name: 'Dubai', x: 57.4, y: 54.7, delay: 0.0, big: true },
  { name: 'Melbourne', x: 82.7, y: 85.1, delay: 2 },
]

export default function GlobalPresence({ className = '' }) {
  return (
    <figure className={`global-presence ${className}`}>
      <img
        src="/about/global-presence.webp"
        width="3344"
        height="1570"
        alt="Tribox global presence: head office in Dubai, UAE, with offices in Lahore and Karachi, Calgary, Melbourne and a future office in Portugal"
      />
      {spots.map((s) => (
        <span
          key={s.name}
          className={`gp-spot ${s.big ? 'is-big' : ''} ${s.future ? 'is-future' : ''}`}
          style={{ left: `${s.x}%`, top: `${s.y}%`, '--delay': `${s.delay}s` }}
          aria-hidden="true"
        />
      ))}
    </figure>
  )
}
