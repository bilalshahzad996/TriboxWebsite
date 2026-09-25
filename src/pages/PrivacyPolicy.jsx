import { useEffect } from 'react'
import { company } from '../data/site'

const LAST_UPDATED = '25 September 2026'

export default function PrivacyPolicy() {
  useEffect(() => {
    const previous = document.title
    const canonical = document.querySelector('link[rel="canonical"]')
    const previousCanonical = canonical?.getAttribute('href')
    document.title = `Privacy Policy — ${company.name}`
    canonical?.setAttribute('href', 'https://www.tribox365.com/privacy-policy')
    return () => {
      document.title = previous
      if (previousCanonical) canonical.setAttribute('href', previousCanonical)
    }
  }, [])

  return (
    <section className="section legal">
      <div className="container legal-inner">
        <span className="label"><b>Legal</b> Privacy</span>
        <h1 className="section-title">Privacy Policy</h1>
        <p className="legal-updated">Last updated: {LAST_UPDATED}</p>

        <p>
          This policy explains how {company.legalName} (“{company.name}”, “we”, “us”) collects and uses personal
          information when you visit our website or contact us. We handle personal data in line with the data
          protection laws that apply to us in the United Arab Emirates, including Federal Decree-Law No. 45 of 2021
          on the Protection of Personal Data.
        </p>

        <h2>1. Who we are</h2>
        <p>
          {company.legalName} is based in {company.address}. For any privacy question or request, email us at{' '}
          <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>

        <h2>2. Information we collect</h2>
        <p>We only collect information you choose to give us, plus basic technical data needed to run the website:</p>
        <ul>
          <li>
            <strong>Contact form:</strong> your name, email address, and — if you provide them — your company name,
            phone number, the service you are interested in and your message.
          </li>
          <li>
            <strong>Emails and calls:</strong> the details you share when you contact us directly.
          </li>
          <li>
            <strong>Technical data:</strong> like any website, our hosting provider automatically records standard
            server logs (such as IP address, browser type and pages requested) to keep the site secure and working.
          </li>
        </ul>

        <h2>3. How we use your information</h2>
        <ul>
          <li>To reply to your enquiry and discuss our services with you.</li>
          <li>To prepare proposals and deliver the services you ask for.</li>
          <li>To keep our website secure and prevent spam and abuse.</li>
          <li>To meet our legal and regulatory obligations.</li>
        </ul>
        <p>We do not sell your personal information, and we do not use it for automated decision-making.</p>

        <h2>4. Why we are allowed to use it</h2>
        <p>
          We process your information because you asked us to (for example by sending an enquiry), to take steps
          towards a contract with you, for our legitimate interest in running and protecting our business, or where
          the law requires it. Where we rely on your consent, you can withdraw it at any time.
        </p>

        <h2>5. Who we share it with</h2>
        <p>We share personal information only with trusted providers who help us run our business, such as:</p>
        <ul>
          <li>the service that delivers contact form submissions to our inbox;</li>
          <li>our website hosting and email providers.</li>
        </ul>
        <p>
          These providers may only use your information to provide their service to us. We may also disclose
          information if required by law or to protect our rights.
        </p>

        <h2>6. International transfers</h2>
        <p>
          Some of our providers may store or process data outside the UAE. When this happens, we take steps to make
          sure your information stays protected, as required by applicable law.
        </p>

        <h2>7. How long we keep it</h2>
        <p>
          We keep enquiry details for as long as needed to respond and to manage any resulting business
          relationship, and then only as long as required for legal, accounting or reporting purposes.
        </p>

        <h2>8. Your rights</h2>
        <p>Subject to applicable law, you can ask us to:</p>
        <ul>
          <li>give you a copy of the personal information we hold about you;</li>
          <li>correct information that is inaccurate or incomplete;</li>
          <li>delete your information, or restrict how we use it;</li>
          <li>stop using your information, or withdraw a consent you gave us.</li>
        </ul>
        <p>
          To make a request, email <a href={`mailto:${company.email}`}>{company.email}</a>. We may need to confirm
          your identity before responding. You may also have the right to complain to the relevant data protection
          authority in the UAE.
        </p>

        <h2>9. Cookies and local storage</h2>
        <p>
          Our website does not use cookies, analytics or advertising trackers, and our fonts are served from our own
          website rather than a third party. We store a single setting in your browser’s session storage
          (<code>tribox-intro</code>) so the opening animation plays only once per visit; it contains no personal
          information and is deleted when you close your browser.
        </p>

        <h2>10. Security</h2>
        <p>
          We use appropriate technical and organisational measures to protect personal information, including
          encrypted (HTTPS) connections. No method of transmission over the internet is completely secure, but we
          work to protect your information.
        </p>

        <h2>11. Links to other websites</h2>
        <p>
          Our website links to other sites, such as LinkedIn. Their privacy practices are their own, so please review
          their policies.
        </p>

        <h2>12. Children</h2>
        <p>Our services are intended for businesses. We do not knowingly collect information from children.</p>

        <h2>13. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The latest version will always be on this page, with the date
          it was last updated.
        </p>

        <h2>14. Contact us</h2>
        <p>
          {company.legalName}
          <br />
          {company.address}
          <br />
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>

        <a href="/" className="btn btn-ghost legal-back">← Back to home</a>
      </div>
    </section>
  )
}
