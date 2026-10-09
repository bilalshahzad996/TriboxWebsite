// Content for the Program, Project & Portfolio Management service page
// (/services/program-management/), laid out by components/ServicePage.jsx. `icon` names come
// from components/Icon.jsx.

export const programManagementPage = {
  path: '/services/program-management/',
  // Name and type of the service in search engines' structured data
  serviceName: 'Program, project and portfolio management',
  serviceType: 'Program and project management',
  // Contact form: shown in "What do you need help with?"; enquiries are labelled with `topic`
  enquiry: {
    topic: 'Program & Project Management',
    options: [
      'Portfolio planning & strategic alignment',
      'PMO design & standardisation',
      'Programme & delivery oversight',
      'Governance & reporting',
      'Handover & aftercare',
      'Continuous improvement',
      'Something else',
    ],
  },
  meta: {
    title: 'Program, Project & Portfolio Management — Tribox',
    description:
      'Tribox turns digital transformation ambition into delivered value: portfolio planning, PMO design, delivery oversight, governance and reporting, handover and aftercare, and continuous improvement.',
  },

  hero: {
    label: 'Program, Project & Portfolio Management',
    title: 'Turning ambition into',
    accent: 'delivered value',
    text: 'Turning digital transformation ambition into delivered value — six connected services that take you from portfolio planning through delivery, governance and handover to continuous improvement.',
    primary: 'Book a free consultation',
    secondary: 'See the six services',
    secondaryHref: '#overview',
    modules: ['Portfolio planning', 'PMO design', 'Delivery oversight', 'Governance & reporting', 'Handover & aftercare', 'Continuous improvement'],
  },

  // Box beside the hero headline
  panel: { icon: 'chart', title: 'Program management', subtitle: 'Six connected services, one flexible model' },

  // See Overview in components/ServicePage.jsx
  overview: {
    label: 'Our services',
    title: 'Six connected services,',
    accent: 'one flexible model',
    subtitle: 'Turning digital transformation ambition into delivered value.',
    text: 'Start with portfolio planning, then add the services you need: standards, oversight, governance, handover and improvement.',
    items: [
      { tag: '01', start: 'Where it starts', title: 'Portfolio Planning & Strategic Alignment', text: 'Every workstream sequenced against a clear business case, with a named owner — the foundation everything else builds on.' },
      { tag: '02', title: 'PMO Design & Standardisation', text: 'Governance cadence, templates and standards that keep delivery consistent.' },
      { tag: '03', title: 'Programme & Delivery Oversight', text: 'Senior tracking of scope, schedule, budget and risk across every workstream.' },
      { tag: '04', title: 'Governance & Reporting', text: 'Steering committees and reporting packs built for decisions, not just updates.' },
      { tag: '05', title: 'Handover & Aftercare', text: 'Hypercare, knowledge transfer and clear exit criteria, built in from day one.' },
      { tag: '06', title: 'Continuous Improvement', text: 'Post-implementation reviews and benefits tracking feed the next phase.' },
    ],
  },

  headings: {
    faqPrompt: 'Still have a question about program management?',
  },

  faqs: [
    {
      q: 'Where does a program management engagement start?',
      a: 'With portfolio planning and strategic alignment: every workstream sequenced against a clear business case, with a named owner. The other services build on that foundation.',
    },
    {
      q: 'Do we need all six services?',
      a: 'No. They are connected but flexible: you can start with one, such as PMO design or delivery oversight, and add others as the programme matures.',
    },
    {
      q: 'What happens after go-live?',
      a: 'Handover and aftercare covers hypercare, knowledge transfer and clear exit criteria, and continuous improvement uses post-implementation reviews and benefits tracking to feed the next phase.',
    },
  ],
}
