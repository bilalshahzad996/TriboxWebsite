import { useState } from 'react'
import { company, mapsUrl, services } from '../data/site'
import Icon from './Icon'
import Magnetic from './Magnetic'
import Reveal from './Reveal'

// Contact form field limits (characters)
const LIMITS = { name: 60, company: 80, email: 120, phone: 18, message: 1000, messageMin: 10 }

const emptyForm = { name: '', company: '', email: '', phone: '', service: '', message: '', botcheck: '' }

// Where enquiries are sent. Set these in a .env file (see .env.example).
// Without an endpoint the form falls back to opening the visitor's email app.
const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT
const FORM_ACCESS_KEY = import.meta.env.VITE_CONTACT_ACCESS_KEY

const statusMessages = {
  success: 'Thank you! Your message has been sent — our team will get back to you shortly.',
  mailto: 'Thanks! Your email app should open with your message ready to send.',
  error: `Sorry, something went wrong. Please try again or email us at ${company.email}.`,
}

// Contact section with the enquiry form. `num` is the section number in the label.
// `options` fills "What do you need help with?" (default: the services in data/site.js);
// `topic` names the page the enquiry came from, e.g. 'Business Central', and is put in front
// of the chosen option in the email.
export default function Contact({ num = '06', options = services.map((s) => s.title), topic = '' }) {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('idle')
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.botcheck) return // honeypot field: only bots fill it in

    const service = [topic, form.service].filter(Boolean).join(' — ')
    const subject = `Website enquiry${service ? `: ${service}` : ''} from ${form.name}`

    if (!FORM_ENDPOINT) {
      const body = [
        `Name: ${form.name}`,
        `Company: ${form.company || '-'}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone || '-'}`,
        `Service: ${service || '-'}`,
        '',
        form.message,
      ].join('\n')
      window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setStatus('mailto')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...(FORM_ACCESS_KEY && { access_key: FORM_ACCESS_KEY }),
          subject,
          from_name: `${company.name} website`,
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          service,
          message: form.message,
        }),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setStatus('success')
      setForm(emptyForm)
    } catch {
      setStatus('error')
    }
  }

  const sending = status === 'sending'

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal as="span" className="label"><b>{num}</b> Contact</Reveal>
        <Reveal as="h2" variant="mask" className="section-title cta-title">
          Tell us about <span className="gradient-text animated">your project</span>
        </Reveal>

        <div className="contact-grid">
          <Reveal as="form" variant="left" className="contact-form" onSubmit={handleSubmit}>
            <div className="form-status" role="status" aria-live="polite">
              {statusMessages[status] && (
                <p className={`form-message ${status === 'error' ? 'is-error' : ''}`}>{statusMessages[status]}</p>
              )}
            </div>
            <div className="form-row">
              <label className="field">
                <input name="name" autoComplete="name" maxLength={LIMITS.name} placeholder=" " value={form.name} onChange={update} required />
                <span>Your name *</span>
              </label>
              <label className="field">
                <input name="company" autoComplete="organization" maxLength={LIMITS.company} placeholder=" " value={form.company} onChange={update} />
                <span>Company name</span>
              </label>
            </div>
            <div className="form-row">
              <label className="field">
                <input type="email" name="email" autoComplete="email" maxLength={LIMITS.email} placeholder=" " value={form.email} onChange={update} required />
                <span>Email address *</span>
              </label>
              <label className="field">
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={LIMITS.phone}
                  pattern="[0-9 +\(\)\-]{6,18}"
                  title="Numbers, spaces and + - ( ) only"
                  placeholder=" "
                  value={form.phone}
                  onChange={update}
                />
                <span>Phone number</span>
              </label>
            </div>
            <label className="field field-select">
              <select name="service" value={form.service} onChange={update} className={form.service ? 'filled' : ''}>
                <option value="" />
                {options.map((o) => <option key={o} value={o}>{o}</option>)}
                <option value="Other">Something else</option>
              </select>
              <span>What do you need help with?</span>
            </label>
            <label className="field field-message">
              <textarea
                name="message"
                rows="4"
                minLength={LIMITS.messageMin}
                maxLength={LIMITS.message}
                placeholder=" "
                value={form.message}
                onChange={update}
                required
              />
              <span>Tell us about your project *</span>
            </label>
            {/* Honeypot: hidden from people, catches spam bots */}
            <input
              type="text"
              name="botcheck"
              className="honeypot"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              value={form.botcheck}
              onChange={update}
            />
            <p className="form-note">
              By sending this form you agree to our <a href="/privacy-policy/">Privacy Policy</a>.
            </p>
            <Magnetic strength={0.2}>
              <button type="submit" className="btn btn-primary" disabled={sending}>
                {sending ? 'Sending…' : 'Send message'} <Icon name="arrow" size={18} />
              </button>
            </Magnetic>
          </Reveal>

          <Reveal variant="right" delay={150} className="contact-info">
            <a href={`mailto:${company.email}`} className="info-card">
              <span className="info-icon"><Icon name="mail" size={22} /></span>
              <div><span className="label">Email</span><strong>{company.email}</strong></div>
            </a>
            <div className="info-card">
              <span className="info-icon"><Icon name="pin" size={22} /></span>
              <div>
                <span className="label">Offices</span>
                {company.offices.map((o) => (
                  <a
                    key={o.city}
                    className="office"
                    href={mapsUrl(o.address)}
                    target="_blank"
                    rel="noreferrer"
                    title="Open in Google Maps"
                  >
                    <strong>{o.city} <span aria-hidden="true">↗</span></strong>
                    <small>{o.address}</small>
                  </a>
                ))}
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon"><Icon name="clock" size={22} /></span>
              <div><span className="label">Office hours</span><strong>{company.hours}</strong></div>
            </div>
            {company.social.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer" className="info-card">
                <span className="info-icon"><Icon name="users" size={22} /></span>
                <div><span className="label">Follow us</span><strong>{s.label} ↗</strong></div>
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
