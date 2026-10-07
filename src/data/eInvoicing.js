// Content for the E-Invoicing service page (/services/e-invoicing/), laid out by
// components/ServicePage.jsx. `icon` names come from components/Icon.jsx, `logo` names from
// components/TechLogo.jsx. Mandate details (dates, thresholds, formats) change, so the wording
// stays general — check any specifics with your team before adding them.

export const eInvoicingPage = {
  path: '/services/e-invoicing/',
  // Name and type of the service in search engines' structured data
  serviceName: 'E-invoicing integration and compliance',
  serviceType: 'E-invoicing integration',
  // Contact form: shown in "What do you need help with?"; enquiries are labelled with `topic`
  enquiry: {
    topic: 'E-Invoicing',
    options: [
      'E-invoicing readiness assessment',
      'Choosing an ASP',
      'ERP integration',
      'Data mapping & cleansing',
      'Testing & go-live',
      'Support for an existing integration',
    ],
  },
  meta: {
    title: 'E-Invoicing Integration & Compliance — Tribox',
    description:
      'Get ready for e-invoicing: Tribox connects your ERP — Dynamics 365, Business Central, Odoo and more — to an Accredited Service Provider, prepares your data and keeps every invoice compliant.',
  },

  hero: {
    label: 'E-Invoicing',
    // Non-breaking hyphen so "e-invoicing" never splits across lines
    title: 'Get ready for e‑invoicing',
    accent: 'without changing your ERP',
    text: 'E-invoicing mandates are changing how businesses send invoices. We connect your ERP to an Accredited Service Provider (ASP), prepare your invoice data, and keep every invoice compliant — so your team keeps working the way it does today.',
    primary: 'Book a free consultation',
    secondary: 'See what we deliver',
    modules: ['Readiness check', 'ASP onboarding', 'ERP integration', 'Data mapping', 'Invoice validation', 'Credit & debit notes', 'Status tracking', 'Testing & go-live', 'Ongoing support'],
  },

  // Box beside the hero headline (an icon, as there is no product logo)
  panel: { icon: 'invoice', title: 'E-Invoicing', subtitle: 'Your ERP, connected to an ASP' },

  headings: {
    challenges: { title: 'Where e-invoicing', accent: 'catches businesses out' },
    capabilities: {
      title: 'E-invoicing',
      accent: 'capabilities',
      intro: 'Everything it takes to get your invoices compliant — from the readiness check to live invoicing and beyond.',
    },
    process: { title: 'How we get you', accent: 'compliant' },
    tools: { title: 'Works with', accent: 'your ERP' },
    industries: { title: 'E-invoicing for', accent: 'your industry' },
    faqPrompt: 'Still have a question about e-invoicing?',
  },

  challenges: [
    { tag: 'Fixed deadlines', title: 'Compliance dates that don’t move', text: 'Mandates come with set deadlines, and invoices that don’t meet the new rules can’t simply be sent as before.' },
    { tag: 'ERP not ready', title: 'Invoices your system can’t produce', text: 'Most ERPs need new fields, formats and connections before they can send compliant e-invoices.' },
    { tag: 'Data quality', title: 'Rejected for missing details', text: 'Incomplete tax numbers, codes or addresses on customer records cause invoices to be rejected.' },
    { tag: 'Manual workarounds', title: 'Uploading invoices by hand', text: 'Re-keying or uploading invoices one at a time doesn’t scale and invites errors.' },
  ],

  approach: {
    label: 'How we deliver e-invoicing',
    title: 'One team from',
    accent: 'readiness to live invoicing',
    lead: 'E-invoicing at Tribox covers the whole journey — checking your readiness, preparing your data, connecting your ERP to an Accredited Service Provider, testing, and supporting you once invoices flow.',
    text: 'Your invoices keep coming from the ERP your team already uses; we handle the mapping, the connection and the monitoring.',
    delivers: [
      'Readiness assessment',
      'ASP onboarding',
      'ERP integration',
      'Data mapping & cleansing',
      'Testing & validation',
      'Go-live support',
      'Monitoring & support',
      'Finance team training',
    ],
  },

  capabilities: [
    {
      icon: 'shield',
      title: 'Readiness assessment',
      text: 'A clear picture of what your ERP, data and processes need before e-invoicing goes live.',
      points: [
        'Review of your invoices, notes and flows',
        'Gaps in tax data and master data',
        'ERP changes needed, in plain language',
        'A plan and timeline for go-live',
      ],
    },
    {
      icon: 'network',
      title: 'ASP onboarding',
      text: 'Choosing and connecting to an Accredited Service Provider (ASP) that fits your volumes and systems.',
      points: [
        'Help comparing ASP options',
        'Registration and onboarding support',
        'Secure connection set up',
        'Test exchanges before go-live',
      ],
    },
    {
      icon: 'server',
      title: 'ERP integration',
      text: 'Your ERP sending and receiving e-invoices through the ASP automatically — no uploads by hand.',
      points: [
        'Dynamics 365 Finance & Operations',
        'Business Central and Odoo',
        'Other ERPs through their APIs',
        'Outgoing and incoming invoices',
      ],
    },
    {
      icon: 'invoice',
      title: 'Data mapping',
      text: 'Invoice data mapped to the required e-invoice format, with the gaps in your master data fixed.',
      points: [
        'Tax numbers, codes and addresses',
        'Credit notes, debit notes and adjustments',
        'Checks before invoices are sent',
        'Clean-up of customer and supplier records',
      ],
    },
    {
      icon: 'check',
      title: 'Testing & go-live',
      text: 'End-to-end testing with real scenarios, then a supported switch-over.',
      points: [
        'Test scenarios for every invoice type',
        'Rejections caught and fixed early',
        'Cutover plan with your finance team',
        'Hands-on support on go-live day',
      ],
    },
    {
      icon: 'support',
      title: 'Monitoring & support',
      text: 'Ongoing support so invoices keep flowing as rules, volumes and systems change.',
      points: [
        'Status tracking and rejection handling',
        'Updates when requirements change',
        'Helpdesk for your finance team',
        'Reviews as your business grows',
      ],
    },
  ],

  process: [
    { title: 'Assess', text: 'We review your invoices, data and ERP, and show you exactly what needs to change.' },
    { title: 'Prepare', text: 'Master data cleaned up, invoice data mapped, and your ASP chosen and onboarded.' },
    { title: 'Connect & test', text: 'Your ERP connected to the ASP, and every invoice type tested end to end.' },
    { title: 'Go live & support', text: 'A supported switch-over, then monitoring and updates as requirements change.' },
  ],

  tools: [
    { name: 'Dynamics 365 Finance & Operations', logo: 'financeOperations' },
    { name: 'Dynamics 365 Business Central', logo: 'businessCentral' },
    { name: 'Accredited Service Providers', icon: 'network' },
    { name: 'APIs & connectors', icon: 'code' },
  ],

  industries: [
    { title: 'Trading & distribution', text: 'High invoice volumes sent automatically, with credit notes and returns handled.' },
    { title: 'Retail & e-commerce', text: 'Invoices from stores and online channels kept compliant in one flow.' },
    { title: 'Manufacturing', text: 'Customer and supplier invoices linked to orders and deliveries.' },
    { title: 'Professional services', text: 'Project and service invoices issued from your ERP without extra steps.' },
  ],

  engagements: [
    {
      kind: 'Project based',
      title: 'E-invoicing rollout',
      text: 'Readiness assessment, ERP integration, ASP onboarding and go-live — delivered end to end.',
      best: 'Best ahead of a deadline',
    },
    {
      kind: 'Ongoing',
      title: 'Compliance support',
      text: 'Monitoring, rejection handling and updates as requirements change — including integrations another partner built.',
      best: 'Best once you’re live',
    },
  ],

  faqs: [
    {
      q: 'What is e-invoicing?',
      a: 'Sending invoices as structured data in a standard format through an approved network, instead of as PDFs or paper — so invoice data can be checked and shared automatically.',
    },
    {
      q: 'What is an Accredited Service Provider (ASP)?',
      a: 'A provider approved by the authorities to exchange e-invoices between businesses. Your ERP connects to an ASP, which handles the exchange for you.',
    },
    {
      q: 'Does e-invoicing apply to my business?',
      a: 'Mandates are usually rolled out in phases. We check how the current rules apply to your business as part of the readiness assessment.',
    },
    {
      q: 'Do we have to change our ERP?',
      a: 'Usually not. We add the fields, mappings and connection your current ERP needs, so your team keeps working in the system they know.',
    },
    {
      q: 'Which ERPs do you support?',
      a: 'Dynamics 365 Finance & Operations, Business Central and Odoo, as well as other ERPs that offer APIs.',
    },
    {
      q: 'What happens if an invoice is rejected?',
      a: 'The rejection comes back to your team with the reason, so the invoice can be corrected and sent again. We set up tracking so nothing is missed.',
    },
    {
      q: 'Do you support us after go-live?',
      a: 'Yes. We monitor the integration, help with rejections, and update it when requirements change. We can also take over an integration another partner built.',
    },
  ],
}
