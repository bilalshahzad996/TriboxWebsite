import Logo from './Logo'

// Meeting room photo for the About page hero, with the Tribox logo on the white wall like office
// signage. The photo (public/about/meeting-room.webp) is CC0 / public domain, from rawpixel
// (rawpixel.com/image/3282945), with a wall clock retouched out; the logo is the real site logo
// laid over it.
export default function MeetingRoom({ className = '' }) {
  return (
    <figure className={`meeting-room ${className}`}>
      <img
        src="/about/meeting-room.webp"
        width="911"
        height="683"
        alt="A bright meeting room with a white table, grey chairs and the Tribox logo on the wall"
      />
      <span className="meeting-room-logo" aria-hidden="true"><Logo /></span>
    </figure>
  )
}
