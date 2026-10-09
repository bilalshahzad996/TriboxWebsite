// Content for the Financial Consultancy service page (/services/financial-consultancy/), laid
// out by components/ServicePage.jsx. Its eight service areas use the "industries" card grid.
// `icon` names come from components/Icon.jsx.

export const financialConsultancyPage = {
  path: '/services/financial-consultancy/',
  // Name and type of the service in search engines' structured data
  serviceName: 'Financial consultancy',
  serviceType: 'Financial consultancy',
  // Contact form: shown in "What do you need help with?"; enquiries are labelled with `topic`
  enquiry: {
    topic: 'Financial Consultancy',
    options: [
      'Finance operations management',
      'Financial reporting',
      'Controls & compliance',
      'Process transformation',
      'Financial analysis & advisory',
      'Strategic finance leadership',
      'Something else',
    ],
  },
  meta: {
    title: 'Financial Consultancy — Tribox',
    description:
      'Tribox finance leadership oversees and delivers finance operations, core functions, reporting, controls, process transformation and financial advisory for your business.',
  },

  hero: {
    label: 'Financial Consultancy',
    title: 'Finance leadership,',
    accent: 'when your business needs it',
    text: 'Scope of services our finance leadership team oversees and delivers — from day-to-day finance operations and reporting to controls, process transformation and strategic advice.',
    primary: 'Book a free consultation',
    secondary: 'See the scope of services',
    secondaryHref: '#industries',
    modules: ['Finance operations', 'AR, AP, GL & treasury', 'Financial reporting', 'Strategic leadership', 'Controls & compliance', 'Team enablement', 'Process transformation', 'Analysis & advisory'],
  },

  // Box beside the hero headline
  panel: { icon: 'savings', title: 'Financial consultancy', subtitle: 'Finance leadership you can lean on' },

  headings: {
    industries: { label: 'Scope of services', title: 'What our finance', accent: 'leadership delivers' },
    faqPrompt: 'Still have a question about financial consultancy?',
  },

  industries: [
    { title: 'Finance Operations Management', text: 'Oversee day-to-day finance operations, ensuring smooth, efficient processes.' },
    { title: 'Core Function Oversight', text: 'Supervise AR, AP, GL, Treasury, and Record-to-Report functions.' },
    { title: 'Financial Reporting', text: 'Ensure timely, accurate monthly financial statements and management reports.' },
    { title: 'Strategic Leadership', text: 'Mergers & acquisitions, project profitability decisions, and product life cycle management (including revamp or retire).' },
    { title: 'Controls & Compliance', text: 'Strengthen financial controls, policies, and procedures for best practice.' },
    { title: 'Team Enablement', text: 'Guidance, training, and knowledge transfer to finance team members.' },
    { title: 'Process Transformation', text: 'Support transition, implementation, and improvement of finance systems.' },
    { title: 'Financial Analysis & Advisory', text: 'Deliver analysis, forecasting, and budgeting support to leadership.' },
  ],

  faqs: [
    {
      q: 'What does financial consultancy cover?',
      a: 'Our finance leadership team oversees finance operations and core functions (AR, AP, GL, treasury and record-to-report), reporting, controls and compliance, process transformation, team enablement, and analysis and advisory for leadership.',
    },
    {
      q: 'Can you help with strategic decisions?',
      a: 'Yes. We support strategic leadership topics such as mergers and acquisitions, project profitability decisions and product life cycle management, including when to revamp or retire a product.',
    },
    {
      q: 'Can you help us move to a new finance system?',
      a: 'Yes. We support the transition, implementation and improvement of finance systems, and transfer knowledge to your finance team along the way.',
    },
  ],
}
