// Content for the Dynamics 365 CRM service page (/services/crm/), laid out by
// components/ServicePage.jsx. `icon` names come from components/Icon.jsx, `logo` names from
// components/TechLogo.jsx.

export const crmPage = {
  path: '/services/crm/',
  // Name and type of the service in search engines' structured data
  serviceName: 'Microsoft Dynamics 365 CRM implementation and support',
  serviceType: 'CRM implementation',
  // Contact form: shown in "What do you need help with?"; enquiries are labelled with `topic`
  enquiry: {
    topic: 'Dynamics 365 CRM',
    options: [
      'New CRM implementation',
      'Sales',
      'Customer service',
      'Marketing & customer journeys',
      'Moving from another CRM (data migration)',
      'Customer portal',
      'Integrations',
      'Support for an existing system',
      'Training',
    ],
  },
  meta: {
    title: 'Dynamics 365 CRM Implementation: Sales, Service & Marketing — Tribox',
    description:
      'Tribox implements and supports Microsoft Dynamics 365 CRM: sales, customer service and marketing in one place, connected to Outlook, Teams and your ERP.',
  },

  hero: {
    label: 'Microsoft Dynamics 365 Customer Experience / CRM',
    title: 'Win, serve and keep customers with',
    accent: 'Dynamics 365 CRM',
    text: 'We implement and support Microsoft Dynamics 365 for sales, customer service and marketing — giving every team one view of each customer, connected to Outlook, Teams and your ERP.',
    primary: 'Book a free consultation',
    secondary: 'See what we deliver',
    modules: ['Leads & opportunities', 'Accounts & contacts', 'Sales pipeline', 'Quotes & orders', 'Cases & service', 'Knowledge base', 'Marketing journeys', 'Customer portal', 'Dashboards'],
  },

  // Box beside the hero headline (an icon, as there is no CRM product logo here)
  panel: { icon: 'users', title: 'Dynamics 365 CRM', subtitle: 'Sales, service and marketing' },

  headings: {
    challenges: { title: 'Where customer relationships', accent: 'slip through the cracks' },
    capabilities: {
      title: 'CRM',
      accent: 'capabilities',
      intro: 'Everything it takes to plan, deliver and run Dynamics 365 CRM — from the first workshop to everyday use.',
    },
    process: { title: 'How a CRM project', accent: 'runs' },
    tools: { title: 'Built on the', accent: 'Microsoft ecosystem' },
    industries: { title: 'CRM for', accent: 'your industry' },
    faqPrompt: 'Still have a question about Dynamics 365 CRM?',
  },

  challenges: [
    { tag: 'Scattered data', title: 'Customers in inboxes and spreadsheets', text: 'When contacts and deals live in personal files, nobody sees the full picture.' },
    { tag: 'Lost leads', title: 'Opportunities nobody followed up', text: 'Without a shared pipeline, leads go cold and forecasts become guesses.' },
    { tag: 'Slow service', title: 'Customers repeating themselves', text: 'When requests aren’t tracked in one place, customers wait longer and explain twice.' },
    { tag: 'Disconnected teams', title: 'Sales, service and marketing apart', text: 'Each team works from its own list, so campaigns, deals and support don’t line up.' },
  ],

  approach: {
    label: 'How we deliver Dynamics 365 CRM',
    title: 'One team from',
    accent: 'first lead to loyal customer',
    lead: 'CRM at Tribox covers the whole journey — process design, configuration, data migration, integrations, training, and the support that keeps your teams using it every day.',
    text: 'We design the system around how your teams sell and serve, then help them adopt it. Your team owns the data; we handle the configuration, the development and the support.',
    delivers: [
      'Sales automation',
      'Customer service',
      'Marketing journeys',
      'Data migration',
      'Outlook & Teams integration',
      'ERP integration',
      'Customer portals',
      'Training & adoption',
    ],
  },

  capabilities: [
    {
      icon: 'chart',
      title: 'Sales',
      text: 'A shared pipeline, so every lead, opportunity and quote is tracked and followed up.',
      points: [
        'Leads, opportunities and pipeline stages',
        'Quotes, orders and price lists',
        'Sales dashboards and forecasts',
        'Mobile access for teams on the road',
      ],
    },
    {
      icon: 'support',
      title: 'Customer service',
      text: 'Cases, queues and service levels, so every customer request is handled on time.',
      points: [
        'Case management and routing',
        'Service levels and escalations',
        'Knowledge base for faster answers',
        'Email and portal channels',
      ],
    },
    {
      icon: 'globe',
      title: 'Marketing',
      text: 'Segments and customer journeys that turn contacts into leads, and leads into customers.',
      points: [
        'Segments built from CRM data',
        'Email campaigns and journeys',
        'Events and forms',
        'Results tracked back to the pipeline',
      ],
    },
    {
      icon: 'cloud',
      title: 'Data migration',
      text: 'Moving contacts, accounts and history from spreadsheets or your current CRM.',
      points: [
        'Data cleansed and de-duplicated',
        'Accounts, contacts and open deals',
        'Trial imports validated before go-live',
        'Sign-off with the teams who use it',
      ],
    },
    {
      icon: 'network',
      title: 'Integrations',
      text: 'Connecting CRM to Outlook, Teams and your ERP, so data flows without re-keying.',
      points: [
        'Outlook and Teams integration',
        'Business Central, Finance & Operations or Odoo',
        'Website forms and e-commerce',
        'Power Automate workflows',
      ],
    },
    {
      icon: 'users',
      title: 'Portals & adoption',
      text: 'Customer portals and training that get people using the system every day.',
      points: [
        'Customer and partner portals on Power Pages',
        'Role-based training for every team',
        'Copilot features where they save time',
        'Ongoing support and improvements',
      ],
    },
  ],

  process: [
    { title: 'Discover & design', text: 'Workshops with your sales, service and marketing teams to map how they work, then agree scope and timeline.' },
    { title: 'Configure & build', text: 'Dynamics 365 set up around your processes, integrations built, and data migrated in trial runs.' },
    { title: 'Test & train', text: 'User acceptance testing with your teams and role-based training before go-live.' },
    { title: 'Go live & improve', text: 'A supported launch, then adoption reviews and improvements as your teams use it.' },
  ],

  tools: [
    { name: 'Dynamics 365 Sales', icon: 'chart' },
    { name: 'Dynamics 365 Customer Service', icon: 'support' },
    { name: 'Dynamics 365 Customer Insights', icon: 'users' },
    { name: 'Power Pages', logo: 'powerPages' },
    { name: 'Power BI', logo: 'powerBi' },
    { name: 'Copilot', logo: 'copilot' },
    { name: 'Microsoft 365', logo: 'microsoft' },
  ],

  industries: [
    { title: 'Professional services', text: 'Client relationships, proposals and renewals managed in one place.' },
    { title: 'Trading & distribution', text: 'Account management, quotes and orders for large customer bases.' },
    { title: 'Real estate', text: 'Leads, viewings and deals tracked from first enquiry to signed contract.' },
    { title: 'Customer service teams', text: 'Cases, service levels and a knowledge base for busy support desks.' },
  ],

  engagements: [
    {
      kind: 'Project based',
      title: 'Full implementation',
      text: 'End-to-end delivery of Dynamics 365 for sales, service or marketing — or a move from your current CRM.',
      best: 'Best for a defined go-live',
    },
    {
      kind: 'Ongoing',
      title: 'Support & improvement',
      text: 'A dedicated team for support, new features and adoption after go-live — including systems another partner implemented.',
      best: 'Best for systems already live',
    },
  ],

  faqs: [
    {
      q: 'What is Dynamics 365 CRM?',
      a: 'Microsoft’s customer relationship management apps — Dynamics 365 Sales, Customer Service and Customer Insights for marketing — built on one platform and working with Microsoft 365.',
    },
    {
      q: 'Do we need all the apps?',
      a: 'No. Most companies start with sales or customer service and add more later. We recommend what fits your teams and budget.',
    },
    {
      q: 'Can it connect to our ERP?',
      a: 'Yes. We connect CRM to Business Central, Finance & Operations, Odoo and other systems, so accounts, orders and invoices stay in sync.',
    },
    {
      q: 'Can you move us from another CRM?',
      a: 'Yes. We migrate accounts, contacts, open opportunities and history from spreadsheets or your current CRM, with trial imports before go-live.',
    },
    {
      q: 'Does it work with Outlook and Teams?',
      a: 'Yes. Your teams can track emails, meetings and contacts from Outlook, and work on customer records together in Teams.',
    },
    {
      q: 'How do you make sure people actually use it?',
      a: 'We design screens around each role, keep data entry simple, train every team, and review how the system is being used after go-live.',
    },
    {
      q: 'Do you support Dynamics 365 CRM after go-live?',
      a: 'Yes. We provide ongoing support, add features as your teams’ needs change, and test Microsoft’s updates before they reach your users. We can also take over a system another partner implemented.',
    },
  ],
}
