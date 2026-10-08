// Content for the About us page (/about/). Company wording, services, products and the working
// process come from data/site.js; this file holds what is only on this page.

export const aboutPage = {
  path: '/about/',
  meta: {
    title: 'About Us — Tribox',
    description:
      'Tribox is a digital transformation partner based in Dubai with a team in Lahore: Microsoft Dynamics 365, Odoo, web and mobile development, e-invoicing and our own business products.',
  },

  hero: {
    label: 'About Tribox',
    title: 'We are',
    accent: 'change agents',
    text: 'A Dubai-based team of consultants and developers, with colleagues in Lahore — helping growing businesses run better on Microsoft Dynamics 365, Odoo, and custom web and mobile solutions.',
  },

  // Draft wording: confirm with the founders before publishing
  vision: {
    statement: 'To be the partner growing businesses trust to turn the right technology into *lasting results*.',
    text: 'We want every client to run on systems that fit the way they work — designed with their team, delivered by a dedicated tribe, and supported long after go‑live.',
  },

  // The founders. Photos live in public/team/.
  leadership: {
    title: 'Three partners,',
    accent: 'one accountable window',
    intro: 'Tribox is led by its three co-founders, who stay close to every client engagement.',
    people: [
      { name: 'Zain Bokhari', role: 'CTO & Co-Founder', photo: '/team/zain-bokhari.webp', email: 'zain@tribox365.com', linkedin: 'https://www.linkedin.com/in/dynamicsaxdeveloper' },
      { name: 'Syed Mohammad Ayaz Noor', role: 'CEO & Co-Founder', photo: '/team/syed-mohammad-ayaz-noor.webp', email: 'ayaz@tribox365.com', linkedin: 'https://www.linkedin.com/in/ayaznoor' },
      { name: 'Raheel Bashir', role: 'COO & Co-Founder', photo: '/team/raheel-bashir.webp', email: 'raheel@tribox365.com', linkedin: 'https://www.linkedin.com/in/hafiz-raheel-bashir-b1001a120' },
    ],
  },
}
