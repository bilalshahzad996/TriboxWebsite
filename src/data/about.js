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
    title: 'Meet Tribox, your',
    accent: 'digital partner',
    text: 'Established in 2021 in Pakistan, and registered in 2023 in UAE, Tribox specializes in software consulting and digital transformation services. As a Microsoft Partner and Odoo Partner, we qualify as a trusted partner in the evolving digital landscape. At Tribox, we design tailored solutions to meet clients unique needs, ensuring their success through a customer-centric approach.',
  },

  // Mission, vision and values. Draft wording: confirm with the founders before publishing.
  purpose: [
    {
      icon: 'check',
      title: 'Our Mission',
      text: 'To help growing businesses solve real business challenges through digital transformation — with the right platform, a dedicated team and support that lasts.',
    },
    {
      icon: 'globe',
      title: 'Our Vision',
      text: 'To be the partner growing businesses trust to turn the right technology into lasting results.',
    },
    {
      icon: 'users',
      title: 'Our Values',
      values: ['Partnership — we work as part of your team', 'Accountability — we stay with you after go‑live', 'Learning — we listen, iterate and improve', 'Care — support whenever your business needs it'],
    },
  ],

  // How clients can work with Tribox. `icon` names come from components/Icon.jsx.
  engage: {
    note: 'Mix & match as the engagement matures.',
    ways: [
      { icon: 'check', title: 'Project', text: 'Fixed-scope delivery' },
      { icon: 'support', title: 'Managed IT', text: 'Run, support & govern' },
      { icon: 'users', title: 'Resources', text: 'Embedded capacity' },
      { icon: 'shield', title: 'Licences', text: 'Procure, renew, optimise' },
    ],
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
