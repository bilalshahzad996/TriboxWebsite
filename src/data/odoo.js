// Content for the Odoo service page (/services/odoo/), laid out by components/ServicePage.jsx.
// `icon` names come from components/Icon.jsx, `logo` names from components/TechLogo.jsx.

export const odooPage = {
  path: '/services/odoo/',
  // Name of the service in search engines' structured data
  serviceName: 'Odoo ERP implementation, customisation and support',
  // Contact form: shown in "What do you need help with?"; enquiries are labelled with `topic`
  enquiry: {
    topic: 'Odoo',
    options: [
      'New Odoo implementation',
      'Moving from another system (data migration)',
      'Custom modules & development',
      'Integrations',
      'Upgrade to a newer Odoo version',
      'Reports & dashboards',
      'VAT & e-invoicing',
      'Support for an existing system',
      'Training',
    ],
  },
  meta: {
    title: 'Odoo ERP Implementation & Customisation — Tribox',
    description:
      'Tribox implements, customises and supports Odoo ERP for growing businesses: setup and configuration, custom modules, data migration, integrations, training and ongoing support.',
  },

  hero: {
    label: 'Odoo ERP',
    title: 'Grow one app at a time with',
    accent: 'Odoo',
    text: 'We implement, customise and support Odoo for growing companies — starting with the apps you need today, from accounting and inventory to CRM, HR and e-commerce, and adding more as your business grows.',
    primary: 'Book a free consultation',
    secondary: 'See what we deliver',
    modules: ['Accounting', 'Sales & CRM', 'Inventory', 'Purchase', 'Manufacturing', 'Point of Sale', 'eCommerce', 'HR', 'Projects'],
  },

  // Box beside the hero headline
  panel: { logo: 'odoo', title: 'Odoo ERP', subtitle: 'Modular apps, one database' },

  headings: {
    challenges: { title: 'Where growing businesses', accent: 'get stuck' },
    capabilities: {
      title: 'Odoo',
      accent: 'capabilities',
      intro: 'Everything it takes to plan, build and run Odoo — from the first workshop to the next version upgrade.',
    },
    process: { title: 'How an implementation', accent: 'runs' },
    tools: { title: 'Built on', accent: 'open, flexible technology' },
    industries: { title: 'Odoo for', accent: 'your industry' },
    faqPrompt: 'Still have a question about Odoo?',
  },

  challenges: [
    { tag: 'Too many tools', title: 'A different app for every team', text: 'Separate tools for accounting, sales, stock and HR mean data typed in twice and figures that never quite match.' },
    { tag: 'Rigid software', title: 'Processes bent to fit the system', text: 'Off-the-shelf tools that cannot adapt push your team into workarounds and side spreadsheets.' },
    { tag: 'Rising costs', title: 'Paying for more than you use', text: 'Large ERP suites can cost a growing business more than it needs — in licences and in effort.' },
    { tag: 'Stalled rollouts', title: 'Systems that go live half-used', text: 'Without clear scope and training, new software goes live half-adopted and loses the team’s trust.' },
  ],

  approach: {
    label: 'How we deliver Odoo',
    title: 'One team from',
    accent: 'first app to full ERP',
    lead: 'Odoo at Tribox covers the whole journey — scoping and setup, custom modules, data migration, integrations, training, and the support that keeps your system running as you add apps and users.',
    text: 'We start with the apps that solve today’s problems and grow the system with you. Your team owns the database and the data; we handle the configuration, the development and the support.',
    delivers: [
      'Setup & configuration',
      'Custom modules',
      'Data migration',
      'Integrations',
      'Reports & dashboards',
      'Training & adoption',
      'Support & version upgrades',
      'VAT & e-invoicing setup',
    ],
  },

  capabilities: [
    {
      icon: 'server',
      title: 'Setup & configuration',
      text: 'Odoo apps configured around how your business actually works — not the other way round.',
      points: [
        'Process workshops and fit-gap analysis',
        'Accounting, taxes and multi-company setup',
        'Workflows, approvals and user access',
        'Phased go-live, one app at a time',
      ],
    },
    {
      icon: 'code',
      title: 'Custom modules',
      text: 'Python modules that add what standard Odoo doesn’t, kept separate from its core so upgrades stay manageable.',
      points: [
        'Custom fields, views and workflows',
        'Reports and printed documents',
        'Odoo Studio changes reviewed and tidied',
        'Documented, upgrade-ready code',
      ],
    },
    {
      icon: 'cloud',
      title: 'Data migration',
      text: 'Moving customers, products, stock and open balances from spreadsheets or your current system.',
      points: [
        'Data cleansed and mapped to Odoo',
        'Opening balances and open documents',
        'Trial imports validated before go-live',
        'Sign-off with the teams who use it',
      ],
    },
    {
      icon: 'network',
      title: 'Integrations',
      text: 'Connecting Odoo to the tools around it so data flows without re-keying.',
      points: [
        'Online stores, marketplaces and payment gateways',
        'Banking and shipping connections',
        'Odoo APIs to your in-house applications',
        'E-invoicing through an Accredited Service Provider',
      ],
    },
    {
      icon: 'chart',
      title: 'Reports & dashboards',
      text: 'Live dashboards so managers see sales, stock and cash without exporting to spreadsheets.',
      points: [
        'Dashboards built into Odoo',
        'Financial reports and KPIs',
        'Power BI where you need deeper analysis',
        'Scheduled reports by email',
      ],
    },
    {
      icon: 'support',
      title: 'Support & upgrades',
      text: 'Ongoing support after go-live, and smooth moves to new Odoo versions.',
      points: [
        'Helpdesk for users and administrators',
        'Version upgrades with custom modules migrated',
        'Performance and access reviews',
        'New apps added as you grow',
      ],
    },
  ],

  process: [
    { title: 'Discover & plan', text: 'Workshops with your team to map processes, gaps and data, then agree the apps, scope and timeline.' },
    { title: 'Configure & build', text: 'Odoo apps configured, custom modules built, and data migrated in trial runs.' },
    { title: 'Test & train', text: 'User acceptance testing with your team and role-based training before go-live.' },
    { title: 'Go live & grow', text: 'A supported go-live, then ongoing support and new apps as your business grows.' },
  ],

  tools: [
    { name: 'Odoo Community & Enterprise', logo: 'odoo' },
    { name: 'Odoo.sh & cloud hosting', icon: 'cloud' },
    { name: 'Python', icon: 'code' },
    { name: 'PostgreSQL', icon: 'server' },
    { name: 'Power BI', logo: 'powerBi' },
  ],

  industries: [
    { title: 'Trading & distribution', text: 'Purchasing, stock and multi-warehouse operations, with barcode-driven picking and delivery.' },
    { title: 'Retail & e-commerce', text: 'Point of sale, online store and stock in one system, with one view of every customer.' },
    { title: 'Manufacturing', text: 'Bills of materials, work orders and quality checks, linked to stock and accounting.' },
    { title: 'Services & projects', text: 'Projects, timesheets and invoicing, with the profitability of every job in view.' },
  ],

  engagements: [
    {
      kind: 'Project based',
      title: 'Full implementation',
      text: 'End-to-end delivery of a new Odoo system, or a move from your current software — one app or the full ERP.',
      best: 'Best for a defined go-live',
    },
    {
      kind: 'Ongoing',
      title: 'Support & development',
      text: 'A dedicated team for support, new modules and version upgrades — including systems another partner implemented.',
      best: 'Best for systems already live',
    },
  ],

  faqs: [
    {
      q: 'What is Odoo?',
      a: 'A suite of business apps — accounting, sales, CRM, inventory, manufacturing, HR, e-commerce and more — that share one database. You start with the apps you need and add others later.',
    },
    {
      q: 'Community or Enterprise edition?',
      a: 'Community is free and open source; Enterprise adds more apps, features and Odoo’s own support under a subscription. We recommend the edition that fits your requirements and budget.',
    },
    {
      q: 'How long does an implementation take?',
      a: 'It depends on the apps, the number of companies and the integrations involved. We agree a timeline after the discovery workshops, and go live one app at a time where that reduces risk.',
    },
    {
      q: 'Can Odoo be customised?',
      a: 'Yes. We build custom modules in Python, kept separate from Odoo’s standard code so version upgrades stay manageable.',
    },
    {
      q: 'Can you migrate data from our current system?',
      a: 'Yes — customers, vendors, products, stock and opening balances from spreadsheets or your current software, with trial imports validated before go-live.',
    },
    {
      q: 'Where is Odoo hosted?',
      a: 'On Odoo Online, on Odoo.sh, or on your own servers or cloud. Custom modules need Odoo.sh or your own hosting; we help you choose based on customisation, cost and control.',
    },
    {
      q: 'Does Odoo handle VAT and e-invoicing?',
      a: 'Yes. We configure taxes for your country and connect Odoo to an Accredited Service Provider (ASP) for e-invoicing, so your invoices meet local requirements.',
    },
    {
      q: 'Do you support Odoo after go-live?',
      a: 'Yes. We provide ongoing support, add apps and features as you grow, and handle upgrades to new Odoo versions. We can also take over a system another partner implemented.',
    },
  ],
}
