// The Tribox "Global Presence" world map for the About page hero (public/about/global-presence.webp,
// 16:9). It already carries the Tribox logo and the office labels; glowing rings pulse on top of
// each location. `x` and `y` are percentages of the image; `big` marks the head office.
const spots = [
  { name: 'Calgary', x: 17.2, y: 28.4, delay: 0.4 },
  { name: 'Portugal', x: 41.0, y: 37.4, delay: 1.2, future: true },
  { name: 'Lahore', x: 63.6, y: 34.2, delay: 0.8 },
  { name: 'Karachi', x: 65.7, y: 37.4, delay: 1.6 },
  { name: 'Dubai', x: 57.4, y: 45.6, delay: 0, big: true },
  { name: 'Melbourne', x: 82.7, y: 71.0, delay: 2 },
]

export default function GlobalPresence({ className = '' }) {
  return (
    <figure className={`global-presence ${className}`}>
      <img
        src="/about/global-presence.webp"
        width="3344"
        height="1882"
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
