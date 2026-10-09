// Content for the Resource Outsourcing & Augmentation service page
// (/services/resource-outsourcing/), laid out by components/ServicePage.jsx. `icon` names come
// from components/Icon.jsx.

export const resourceOutsourcingPage = {
  path: '/services/resource-outsourcing/',
  // Name and type of the service in search engines' structured data
  serviceName: 'Resource outsourcing and augmentation',
  serviceType: 'IT resource outsourcing',
  // Contact form: shown in "What do you need help with?"; enquiries are labelled with `topic`
  enquiry: {
    topic: 'Resource Outsourcing',
    options: [
      'Software development resources',
      'Project management (PMO)',
      'Accounting & finance resources',
      'IT help desk & support',
      'BPO / managed services',
      'Something else',
    ],
  },
  meta: {
    title: 'Resource Outsourcing & Augmentation — Tribox',
    description:
      'Tribox provides skilled resources and governance for software development, project management, accounting & finance and IT help desk — faster delivery, lower risk and controlled cost.',
  },

  hero: {
    label: 'Resource Outsourcing & Augmentation',
    title: 'Skilled resources,',
    accent: 'delivered with governance',
    text: 'A flexible delivery model that combines skilled resources, operational governance and measurable outcomes — so you get faster delivery, lower risk and controlled cost.',
    primary: 'Book a free consultation',
    secondary: 'See the model',
    secondaryHref: '#overview',
    modules: ['Software development', 'Project management', 'Accounting & finance', 'IT help desk & support', 'Application development', 'Infrastructure', 'Cloud', 'Data & analytics', 'Cybersecurity', 'IT consulting'],
  },

  // Box beside the hero headline
  panel: { icon: 'users', title: 'Resource augmentation', subtitle: 'Skilled people, governed delivery' },

  // "Why clients choose this model": see Overview in components/ServicePage.jsx
  overview: {
    label: 'Resource outsourcing',
    title: 'Why clients choose',
    accent: 'this model',
    subtitle: 'A flexible delivery model that combines skilled resources, operational governance and measurable outcomes.',
    text: 'Outsource a whole function or add specialists to your own team. Either way, Tribox brings the people, the reporting and the delivery governance.',
    pillsLabel: 'BPO coverage',
    pills: ['Application Dev', 'Infrastructure', 'Cloud', 'Data & Analytics', 'Cybersecurity', 'IT Consulting'],
    items: [
      { tag: 'DEV', title: 'Software Development', text: 'D365/Power Platform, .NET/React development, integrations, enhancements and technical delivery.' },
      { tag: 'PMO', title: 'Project Management', text: 'PMO services, delivery governance, project controls, reporting and assurance.' },
      { tag: 'FIN', title: 'Accounting & Finance', text: 'Accountants, finance consultants, ERP transaction support and process assistance.' },
      { tag: 'IT', title: 'IT Help Desk & Support', text: 'Service desk resources, application support, infrastructure, cloud and cybersecurity assistance.' },
    ],
    bestFit: {
      title: 'Why clients choose this model',
      list: [
        'Bridge capability gaps with ERP, technology and finance specialists',
        'Scale capacity without increasing permanent headcount',
        'Use Tribox reporting, delivery governance and assurance',
        'Support project peaks, managed services and BPO operations',
      ],
      outcome: 'Outcome: Faster delivery • Lower risk • Controlled cost',
    },
  },

  headings: {
    process: { title: 'How resourcing', accent: 'works' },
    faqPrompt: 'Still have a question about resourcing?',
  },

  process: [
    { title: 'Understand the need', text: 'We learn which skills, how many people and for how long, and what success looks like.' },
    { title: 'Match the resources', text: 'We propose specialists with the right ERP, technology or finance experience.' },
    { title: 'Deliver with governance', text: 'Resources work to agreed controls, with regular reporting and assurance from Tribox.' },
    { title: 'Review & adjust', text: 'We review results together and scale the team up or down as your needs change.' },
  ],

  faqs: [
    {
      q: 'What is resource augmentation?',
      a: 'Adding skilled Tribox specialists to your own team, for a project peak, a capability gap or an ongoing function, without increasing your permanent headcount.',
    },
    {
      q: 'Which skills can you provide?',
      a: 'Software development (D365, Power Platform, .NET and React), project management and PMO, accounting and finance, and IT help desk and support, including infrastructure, cloud and cybersecurity.',
    },
    {
      q: 'Can you run a whole function for us?',
      a: 'Yes. Beyond individual resources, we support managed services and BPO operations across application development, infrastructure, cloud, data and analytics, cybersecurity and IT consulting.',
    },
    {
      q: 'How do you keep delivery under control?',
      a: 'Resources work within Tribox delivery governance, with project controls, regular reporting and assurance, so you can see progress and cost.',
    },
  ],
}
