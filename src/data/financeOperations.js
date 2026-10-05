// Content for the Finance & Operations service page (/services/finance-operations/), laid out by
// components/ServicePage.jsx. `icon` names come from components/Icon.jsx, `logo` names from
// components/TechLogo.jsx.

export const financeOperationsPage = {
  path: '/services/finance-operations/',
  // Name of the service in search engines' structured data
  serviceName: 'Microsoft Dynamics 365 Finance & Operations implementation and support',
  // Contact form: shown in "What do you need help with?"; enquiries are labelled with `topic`
  enquiry: {
    topic: 'Finance & Operations',
    options: [
      'New Finance & Operations implementation',
      'Upgrade from Dynamics AX',
      'Moving from another ERP (data migration)',
      'Extensions & development (X++)',
      'Integrations',
      'Reporting & Power BI',
      'VAT & e-invoicing',
      'Support for an existing system',
      'Training',
    ],
  },
  meta: {
    title: 'Dynamics 365 Finance & Operations Implementation — Tribox',
    description:
      'Tribox implements, upgrades and supports Microsoft Dynamics 365 Finance & Operations: finance, supply chain, manufacturing and projects on one enterprise ERP platform.',
  },

  hero: {
    label: 'Microsoft Dynamics 365 Finance & Operations',
    title: 'One enterprise platform for',
    accent: 'finance and supply chain',
    text: 'We implement, upgrade and support Microsoft Dynamics 365 Finance & Operations for organisations that have outgrown their systems — bringing finance, supply chain, manufacturing and projects together across companies and countries.',
    primary: 'Book a free consultation',
    secondary: 'See what we deliver',
    modules: ['Finance', 'Supply chain', 'Procurement', 'Warehousing', 'Manufacturing', 'Projects', 'Asset management', 'Multi-company', 'Reporting'],
  },

  // Box beside the hero headline
  panel: { logo: 'financeOperations', title: 'Dynamics 365 Finance & Operations', subtitle: 'Built for complex organisations' },

  headings: {
    challenges: { title: 'Where complex organisations', accent: 'lose control' },
    capabilities: {
      title: 'Finance & Operations',
      accent: 'capabilities',
      intro: 'Everything it takes to plan, deliver and run Finance & Operations — from the first workshop to the next release.',
    },
    process: { title: 'How an implementation', accent: 'runs' },
    tools: { title: 'Built on the', accent: 'Microsoft ecosystem' },
    industries: { title: 'Finance & Operations for', accent: 'your industry' },
    faqPrompt: 'Still have a question about Finance & Operations?',
  },

  challenges: [
    { tag: 'Many entities', title: 'Group reporting by spreadsheet', text: 'Consolidating several companies, currencies and charts of accounts by hand slows every close.' },
    { tag: 'Legacy ERP', title: 'Systems near the end of their life', text: 'Older ERPs such as Dynamics AX get harder to support, integrate and keep secure.' },
    { tag: 'Supply chain blind spots', title: 'Stock and demand out of view', text: 'Without one view of inventory, orders and production, planning turns into guesswork.' },
    { tag: 'Compliance pressure', title: 'Controls that depend on people', text: 'Manual approvals and patchy audit trails put tax and regulatory compliance at risk.' },
  ],

  approach: {
    label: 'How we deliver Finance & Operations',
    title: 'One team from',
    accent: 'blueprint to business as usual',
    lead: 'Finance & Operations at Tribox covers the whole journey — solution design, configuration, data migration, extensions and integrations, testing, training, and the support that keeps the platform running as your organisation grows.',
    text: 'We stay accountable after go-live. Your team owns the system and the data; we handle the configuration, the development, the updates and the support desk.',
    delivers: [
      'Solution design & blueprint',
      'Implementation & go‑live',
      'AX upgrades & data migration',
      'Extensions (X++)',
      'Integrations',
      'Reporting & Power BI',
      'Support & updates',
      'VAT & e-invoicing setup',
    ],
  },

  capabilities: [
    {
      icon: 'server',
      title: 'Implementation',
      text: 'A structured rollout that configures Finance & Operations around your processes, entities and controls.',
      points: [
        'Business process workshops and fit-gap',
        'Legal entities, charts of accounts and dimensions',
        'Workflows, approvals and security roles',
        'Phased rollout by company or region',
      ],
    },
    {
      icon: 'cloud',
      title: 'Upgrades & migration',
      text: 'Moving from Dynamics AX or another ERP to the cloud, with your history and balances carried over.',
      points: [
        'Dynamics AX to Finance & Operations upgrades',
        'Master data and opening balances',
        'Trial migrations validated before go-live',
        'Reconciliation signed off with finance',
      ],
    },
    {
      icon: 'code',
      title: 'Extensions & development',
      text: 'X++ extensions that add what your processes need, while keeping Microsoft’s updates simple.',
      points: [
        'Custom fields, forms and workflows',
        'Reports and document layouts',
        'Partner solutions selected and configured',
        'Upgrade-safe, documented extensions',
      ],
    },
    {
      icon: 'network',
      title: 'Integrations',
      text: 'Connecting Finance & Operations to the systems around it with Microsoft’s integration tools.',
      points: [
        'Data entities and APIs',
        'Power Automate and Azure integration',
        'Banks, e-commerce and logistics partners',
        'Power Platform apps on the same data',
      ],
    },
    {
      icon: 'chart',
      title: 'Reporting & analytics',
      text: 'Financial and operational reporting, so managers get answers without waiting for month-end.',
      points: [
        'Financial reporting and consolidations',
        'Power BI dashboards',
        'Microsoft Fabric for larger data needs',
        'Copilot features where they save time',
      ],
    },
    {
      icon: 'support',
      title: 'Support & updates',
      text: 'Ongoing support that keeps the platform healthy after go-live, through every service update.',
      points: [
        'Helpdesk for users and administrators',
        'Microsoft service updates tested before rollout',
        'Performance and security reviews',
        'Continuous improvements as you grow',
      ],
    },
  ],

  process: [
    { title: 'Discover & design', text: 'Workshops with your teams to map processes and agree the solution blueprint, scope and timeline.' },
    { title: 'Configure & build', text: 'Finance & Operations set up, extensions and integrations built, and data migrated in trial runs.' },
    { title: 'Test & train', text: 'User acceptance testing with your teams and role-based training before go-live.' },
    { title: 'Go live & support', text: 'A supported cutover, then ongoing support, updates and improvements.' },
  ],

  tools: [
    { name: 'Dynamics 365 Finance & Operations', logo: 'financeOperations' },
    { name: 'Microsoft Azure', logo: 'azure' },
    { name: 'Power BI', logo: 'powerBi' },
    { name: 'Microsoft Fabric', logo: 'fabric' },
    { name: 'Copilot', logo: 'copilot' },
    { name: 'X++ & extensions', icon: 'code' },
  ],

  industries: [
    { title: 'Manufacturing', text: 'Production, planning and costing across plants, linked to finance in real time.' },
    { title: 'Distribution & logistics', text: 'Multi-warehouse inventory, procurement and transport for high order volumes.' },
    { title: 'Retail', text: 'Head-office finance, merchandising and supply chain for many stores and channels.' },
    { title: 'Projects & services', text: 'Project accounting, resourcing and billing for organisations that run on projects.' },
  ],

  engagements: [
    {
      kind: 'Project based',
      title: 'Full implementation',
      text: 'End-to-end delivery of a new Finance & Operations rollout, or an upgrade from Dynamics AX or another ERP.',
      best: 'Best for a defined go-live',
    },
    {
      kind: 'Ongoing',
      title: 'Support & improvement',
      text: 'A dedicated team for support, updates and improvements after go-live — including systems another partner implemented.',
      best: 'Best for systems already live',
    },
  ],

  faqs: [
    {
      q: 'What is Dynamics 365 Finance & Operations?',
      a: 'Microsoft’s enterprise ERP for finance, supply chain, manufacturing and projects. It suits organisations with several companies or countries, high volumes or complex operations.',
    },
    {
      q: 'Finance & Operations or Business Central?',
      a: 'Business Central fits small and mid-sized companies; Finance & Operations is built for larger organisations with complex processes, many entities or high volumes. We work with both and recommend the one that fits.',
    },
    {
      q: 'Can you upgrade us from Dynamics AX?',
      a: 'Yes. We plan and deliver the move from Dynamics AX to Finance & Operations — data, customisations and integrations — with trial runs before go-live.',
    },
    {
      q: 'How long does an implementation take?',
      a: 'It depends on your scope, the number of legal entities and the integrations involved. We agree a timeline after the discovery workshops, and phase the rollout where that reduces risk.',
    },
    {
      q: 'Can Finance & Operations be customised?',
      a: 'Yes, through X++ extensions and solutions from Microsoft partners. Extensions sit alongside the standard application, so Microsoft’s updates keep working.',
    },
    {
      q: 'Does it handle VAT and e-invoicing?',
      a: 'Yes. We configure tax for each legal entity and connect Finance & Operations to an Accredited Service Provider (ASP) for e-invoicing.',
    },
    {
      q: 'Do you support Finance & Operations after go-live?',
      a: 'Yes. We provide ongoing support, test Microsoft’s service updates before they reach your users, and keep improving the system as your organisation grows. We can also take over support of a system that is already live.',
    },
  ],
}
