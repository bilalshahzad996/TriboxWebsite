// Central place for all company content. Edit these values to update the whole site.
// Content is based on the current tribox365.com website.

export const company = {
  name: 'Tribox',
  legalName: 'Tribox FZCO',
  kicker: 'We are change agents',
  tagline: 'Experienced. Well equipped. Efficient. We offer digital transformation and automation for your business.',
  // Words wrapped in *asterisks* are highlighted in the About section.
  statement:
    'Tribox does more than just *implement software* and *develop solutions.* We help our clients solve their business challenges through *digital transformation.*',
  about:
    'We design solutions in close cooperation with your team to meet your needs and expectations. Dedicated teams and tribes are formed to deliver solutions for your business — we are tightly aligned with it.',
  email: 'sales@tribox365.com',
  address: 'Dubai Silicon Oasis, Dubai, UAE',
  offices: [
    { city: 'Dubai, UAE', address: 'Dubai Silicon Oasis, Dubai, UAE' },
    { city: 'Lahore, Pakistan', address: '460, Block G3, Phase 2, Johar Town, Lahore 54000, Pakistan' },
  ],
  hours: 'Mon – Fri, 09:00 – 17:00',
  // Words the hero headline cycles through.
  rotating: [
    'Microsoft Dynamics 365 Finance and Operations',
    'Microsoft Dynamics Business Central',
    'Odoo',
    'Customer Relationship Management',
    'Human Resource Management',
    'E-Invoicing Connectors',
    'Point of Sales',
    'Shop in Shop Application',
    'Transportation Management',
    'Web & Mobile Applications',
  ],
  social: [{ label: 'LinkedIn', url: 'https://www.linkedin.com/company/tribox-private-limited/' }],
}

// Google Maps link for an address (opens the map app on phones).
export const mapsUrl = (address) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

// Words that scroll along the moving strip under the hero.
export const marquee = [
  'Dynamics 365',
  'Business Central',
  'CRM',
  'Odoo',
  'Mobile Apps',
  'Web Apps',
]

// Why clients choose Tribox. `icon` names come from components/Icon.jsx.
export const highlights = [
  { icon: 'users', title: 'Professional team', text: 'Experienced consultants and developers ready to work as part of your team.' },
  { icon: 'savings', title: 'High savings potential', text: 'Automation and the right platform choice cut costs across your operations.' },
  { icon: 'feedback', title: 'Learn from feedback', text: 'We listen, iterate and improve our solutions based on customer feedback.' },
  { icon: 'support', title: '24/7 customer support', text: 'Proactive maintenance and support whenever your business needs it.' },
]

// `logo` is a product logo from components/BrandLogo.jsx, otherwise an icon from components/Icon.jsx.
export const services = [
  {
    title: 'Microsoft Dynamics 365 Finance & Operations',
    logo: 'dynamics365',
    wide: true,
    text: 'End-to-end implementation and support of Dynamics 365 Finance & Operations — finance, supply chain and operations on one enterprise ERP platform.',
    tags: ['Implementation', 'Upgrades & migration', 'Support'],
  },
  {
    title: 'Microsoft Dynamics 365 Business Central',
    logo: 'dynamics365',
    text: 'A complete business management solution for growing companies — financials, sales, purchasing and inventory, implemented and supported by our team.',
    tags: ['Implementation', 'Customisation', 'Support'],
  },
  {
    title: 'Microsoft Dynamics 365 Customer Experience / CRM',
    logo: 'dynamics365',
    text: 'Customer relationship management tailored to how you win, serve and keep customers — sales, customer service and marketing in one place.',
    tags: ['Sales', 'Customer service', 'Marketing'],
  },
  {
    title: 'Odoo Implementation',
    logo: 'odoo',
    wide: true,
    text: 'Fast, modular Odoo ERP rollouts — from accounting, inventory and HR to CRM and e-commerce — configured and customised for your business.',
    tags: ['Setup & configuration', 'Custom modules', 'Data migration', 'Training'],
  },
  {
    title: 'Mobile Application Development',
    icon: 'mobile',
    text: 'Native and cross-platform mobile applications for iOS and Android, designed around your users.',
    tags: ['iOS', 'Android', 'Cross-platform'],
  },
  {
    title: 'Web Application Development',
    icon: 'globe',
    text: 'Websites, web applications and e-commerce platforms built for performance and growth.',
    tags: ['Websites', 'Web apps', 'E-commerce'],
  },
  {
    title: 'E-Invoicing',
    icon: 'invoice',
    text: 'Get ready for e-invoicing mandates — we connect your ERP to an Accredited Service Provider (ASP) and keep every invoice compliant.',
    tags: ['ASP onboarding', 'ERP integration', 'Compliance'],
  },
]

// Technology & partner ecosystem. `logo` names come from components/TechLogo.jsx.
export const technologies = [
  { name: 'Microsoft', logo: 'microsoft' },
  { name: 'Dynamics 365 Finance & Operations', logo: 'financeOperations' },
  { name: 'Dynamics 365 Business Central', logo: 'businessCentral' },
  { name: 'Microsoft Azure', logo: 'azure' },
  { name: 'Copilot', logo: 'copilot' },
  { name: 'Odoo', logo: 'odoo' },
  { name: 'Power BI', logo: 'powerBi' },
  { name: 'React', logo: 'react' },
  { name: 'WordPress', logo: 'wordpress' },
  { name: '.NET', logo: 'dotnet' },
  { name: 'Microsoft Fabric', logo: 'fabric' },
  { name: 'Power Pages', logo: 'powerPages' },
]

// Strategic & delivery partners. Logos live in public/logos/partners.
export const partners = [
  { name: 'The Code Cruise', logo: '/logos/partners/the-code-cruise.png' },
  { name: 'Beyond The Analytics', logo: '/logos/partners/beyond-the-analytics.png' },
  { name: 'Strategic partner', logo: '/logos/partners/partner-p.png' },
  { name: 'Marmin — an AJMS group entity', logo: '/logos/partners/marmin.png' },
  { name: 'Invictus Hub', logo: '/logos/partners/invictus-hub.png' },
]

export const clients = [
  { name: 'Al Douri Group', logo: '/logos/clients/al-douri-group.png' },
  { name: 'Business Experts Group', logo: '/logos/clients/business-experts-group.png' },
  { name: 'Velocity Next', logo: '/logos/clients/velocity-next.png' },
  { name: '4Matic', logo: '/logos/clients/4matic.jpg' },
  { name: 'KEZAD Group', logo: '/logos/clients/kezad-group.png' },
]

export const process = [
  { title: 'Drop us an email', text: 'Tell us about your business and the challenge you want to solve.' },
  { title: 'Meet our professionals', text: 'Our consultants review your processes and systems with your team.' },
  { title: 'Tailor-made solution', text: 'A dedicated tribe designs, delivers and supports your solution.' },
]
