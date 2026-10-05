// Content for the Business Central service page (/services/business-central/), laid out by
// components/ServicePage.jsx. `icon` names come from components/Icon.jsx, `logo` names from
// components/TechLogo.jsx.

export const bcPage = {
  path: '/services/business-central/',
  // Name of the service in search engines' structured data
  serviceName: 'Microsoft Dynamics 365 Business Central implementation and support',
  // Contact form: shown in "What do you need help with?"; enquiries are labelled with `topic`
  enquiry: {
    topic: 'Business Central',
    options: [
      'New Business Central implementation',
      'Moving from another system (data migration)',
      'Upgrade from Dynamics NAV or GP',
      'Customisation & extensions',
      'Integrations',
      'Reporting & Power BI',
      'VAT & e-invoicing',
      'Support for an existing system',
      'Training',
    ],
  },
  meta: {
    title: 'Dynamics 365 Business Central Implementation & Support — Tribox',
    description:
      'Tribox implements, customises and supports Microsoft Dynamics 365 Business Central for growing businesses: data migration, integrations, Power BI reporting and ongoing support.',
  },

  hero: {
    label: 'Microsoft Dynamics 365 Business Central',
    title: 'Run your whole business on',
    accent: 'Business Central',
    text: 'We implement, customise and support Microsoft Dynamics 365 Business Central for growing companies — replacing spreadsheets and disconnected tools with one connected system for financials, sales, purchasing, inventory and projects.',
    primary: 'Book a free consultation',
    secondary: 'See what we deliver',
    modules: ['Financials', 'Sales', 'Purchasing', 'Inventory', 'Warehousing', 'Projects', 'Manufacturing', 'Service', 'Reporting'],
  },

  // Box beside the hero headline
  panel: { logo: 'businessCentral', title: 'Dynamics 365 Business Central', subtitle: 'One system, every team' },

  headings: {
    challenges: { title: 'Where growing businesses', accent: 'outgrow their systems' },
    capabilities: {
      title: 'Business Central',
      accent: 'capabilities',
      intro: 'Everything it takes to plan, deliver and run Business Central — from the first workshop to the next major release.',
    },
    process: { title: 'How an implementation', accent: 'runs' },
    tools: { title: 'Built on the', accent: 'Microsoft ecosystem' },
    industries: { title: 'Business Central for', accent: 'your industry' },
    faqPrompt: 'Still have a question about Business Central?',
  },

  challenges: [
    { tag: 'Spreadsheets everywhere', title: 'Numbers nobody fully trusts', text: 'Figures copied between spreadsheets and tools drift apart, and month-end turns into reconciliation.' },
    { tag: 'Disconnected tools', title: 'Sales, stock and finance out of sync', text: 'When each team works in its own system, orders, inventory and invoices never quite match.' },
    { tag: 'Slow reporting', title: "Decisions made on last month's data", text: 'Without live reporting, managers wait days for answers the system should give instantly.' },
    { tag: 'Outgrown software', title: 'Entry-level accounting at its limit', text: 'Tools that worked for a small team struggle with more users, companies, currencies and compliance.' },
  ],

  approach: {
    label: 'How we deliver Business Central',
    title: 'One team from',
    // Non-breaking hyphen so "go-live" never splits across lines
    accent: 'go‑live to growth',
    lead: 'Business Central at Tribox covers the full journey — planning and implementation, data migration, customisation and integrations, training, and the ongoing support that keeps the system working as your business changes.',
    text: 'We stay accountable after go-live. Your team owns the system and the data; we handle the configuration, the extensions, the updates and the support desk.',
    delivers: [
      'Implementation & go‑live',
      'Data migration',
      'Customisation & extensions',
      'Integrations',
      'Reporting & Power BI',
      'Training & adoption',
      'Support & updates',
      'VAT & e-invoicing setup',
    ],
  },

  capabilities: [
    {
      icon: 'server',
      title: 'Implementation',
      text: 'A structured rollout that configures Business Central around how your business actually works.',
      points: [
        'Process workshops and fit-gap analysis',
        'Chart of accounts, dimensions and posting setup',
        'VAT, e-invoicing and multi-currency configuration',
        'Phased go-live with hands-on cutover support',
      ],
    },
    {
      icon: 'cloud',
      title: 'Data migration',
      text: 'Moving your data from QuickBooks, Sage, Dynamics NAV or GP, or spreadsheets — without losing the history you rely on.',
      points: [
        'Master data cleansed and mapped',
        'Opening balances and open documents',
        'Trial migrations validated before go-live',
        'Reconciliation signed off with your finance team',
      ],
    },
    {
      icon: 'code',
      title: 'Customisation & extensions',
      text: 'AL extensions that add what your processes need, without changing the standard application — so updates stay simple.',
      points: [
        'Custom fields, pages and approval workflows',
        'Reports and document layouts',
        'AppSource apps selected and configured',
        'Upgrade-safe, documented extensions',
      ],
    },
    {
      icon: 'network',
      title: 'Integrations',
      text: 'Connecting Business Central to the rest of your systems so data flows without re-keying.',
      points: [
        'E-commerce, point of sale and banking connections',
        'Power Automate workflows',
        'APIs to your in-house applications',
        'Outlook, Teams and Microsoft 365 integration',
      ],
    },
    {
      icon: 'chart',
      title: 'Reporting & analytics',
      text: 'Live dashboards and financial reports, so managers get answers without waiting for month-end.',
      points: [
        'Power BI dashboards on Business Central data',
        'Financial statements and account schedules',
        'KPIs for sales, stock and cash flow',
        'Copilot features where they save time',
      ],
    },
    {
      icon: 'support',
      title: 'Support & updates',
      text: 'Ongoing support that keeps the system healthy after go-live, from user questions to major releases.',
      points: [
        'Helpdesk for users and administrators',
        "Microsoft's twice-yearly releases tested before rollout",
        'Performance and permission reviews',
        'Continuous improvements as you grow',
      ],
    },
  ],

  process: [
    { title: 'Discover & plan', text: 'Workshops with your team to map processes, gaps and data, then agree scope and timeline.' },
    { title: 'Configure & build', text: 'Business Central set up, extensions and integrations built, and data migrated in trial runs.' },
    { title: 'Test & train', text: 'User acceptance testing with your team and role-based training before go-live.' },
    { title: 'Go live & support', text: 'A supported cutover, then ongoing support, updates and improvements.' },
  ],

  tools: [
    { name: 'Dynamics 365 Business Central', logo: 'businessCentral' },
    { name: 'Microsoft 365', logo: 'microsoft' },
    { name: 'Microsoft Azure', logo: 'azure' },
    { name: 'Power BI', logo: 'powerBi' },
    { name: 'Copilot', logo: 'copilot' },
    { name: 'Microsoft Fabric', logo: 'fabric' },
    { name: 'Power Pages', logo: 'powerPages' },
  ],

  industries: [
    { title: 'Trading & distribution', text: 'Stock, pricing and purchasing across locations, with item tracking and landed costs.' },
    { title: 'Manufacturing', text: 'Production orders, bills of materials and capacity planning, linked to finance.' },
    { title: 'Retail & e-commerce', text: 'Online and in-store sales flowing into one set of books and one view of stock.' },
    { title: 'Professional services', text: 'Projects, timesheets and billing, with the profitability of every job in view.' },
  ],

  engagements: [
    {
      kind: 'Project based',
      title: 'Full implementation',
      text: 'End-to-end delivery of a new Business Central rollout, or a move from your current accounting or ERP system.',
      best: 'Best for a defined go-live',
    },
    {
      kind: 'Ongoing',
      title: 'Support & improvement',
      text: 'A dedicated team for support, updates and continuous improvements after go-live — including systems another partner implemented.',
      best: 'Best for systems already live',
    },
  ],

  faqs: [
    {
      q: 'What is Microsoft Dynamics 365 Business Central?',
      a: "Microsoft's business management solution for small and mid-sized companies. It brings financials, sales, purchasing, inventory, projects and more into one system that works with Microsoft 365.",
    },
    {
      q: 'How long does an implementation take?',
      a: 'It depends on your scope, the number of companies and the integrations involved. We agree a timeline after the discovery workshops, and phase the go-live where that reduces risk.',
    },
    {
      q: 'Can you migrate data from our current system?',
      a: 'Yes. We migrate master data, opening balances and open documents from systems such as QuickBooks, Sage, Dynamics NAV or GP, and from spreadsheets, with trial runs validated before go-live.',
    },
    {
      q: 'Can Business Central be customised?',
      a: "Yes, through AL extensions and apps from Microsoft AppSource. Extensions sit on top of the standard application, so Microsoft's updates keep working.",
    },
    {
      q: 'Cloud or on-premises?',
      a: "Business Central runs in Microsoft's cloud or on your own servers. Most new projects choose the cloud; we recommend what fits your requirements.",
    },
    {
      q: 'Does it handle VAT and e-invoicing?',
      a: 'Yes. We configure VAT and connect Business Central to an Accredited Service Provider (ASP) for e-invoicing, so your invoices meet local requirements.',
    },
    {
      q: 'Do you support Business Central after go-live?',
      a: "Yes. We provide ongoing support, test Microsoft's major updates before they reach your users, and keep improving the system as your business grows. We can also take over support of a system that is already live.",
    },
  ],
}
