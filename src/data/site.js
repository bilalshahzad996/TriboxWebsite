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

// `techLogo` is a full-colour product logo from components/TechLogo.jsx; otherwise `logo` is a
// single-colour logo from components/BrandLogo.jsx, or `icon` an icon from components/Icon.jsx shown
// on a `tile` of two gradient colours, like an app icon.
// `page` links the service to its own page (otherwise its card links to the contact form).
// `short` is the name used in the header's Services menu.
export const services = [
  {
    title: 'Microsoft Dynamics 365 Finance & Operations',
    short: 'Dynamics 365 Finance & Operations',
    page: '/services/finance-operations/',
    techLogo: 'financeOperations',
    wide: true,
    text: 'End-to-end implementation and support of Dynamics 365 Finance & Operations — finance, supply chain and operations on one enterprise ERP platform.',
    tags: ['Implementation', 'Upgrades & migration', 'Support'],
  },
  {
    title: 'Microsoft Dynamics 365 Business Central',
    short: 'Dynamics 365 Business Central',
    techLogo: 'businessCentral',
    page: '/services/business-central/',
    text: 'A complete business management solution for growing companies — financials, sales, purchasing and inventory, implemented and supported by our team.',
    tags: ['Implementation', 'Customisation', 'Support'],
  },
  {
    title: 'Microsoft Dynamics 365 Customer Experience / CRM',
    short: 'Dynamics 365 CRM',
    page: '/services/crm/',
    techLogo: 'crm',
    text: 'Customer relationship management tailored to how you win, serve and keep customers — sales, customer service and marketing in one place.',
    tags: ['Sales', 'Customer service', 'Marketing'],
  },
  {
    title: 'Odoo Implementation',
    short: 'Odoo',
    page: '/services/odoo/',
    techLogo: 'odooWordmark',
    wide: true,
    text: 'Fast, modular Odoo ERP rollouts — from accounting, inventory and HR to CRM and e-commerce — configured and customised for your business.',
    tags: ['Setup & configuration', 'Custom modules', 'Data migration', 'Training'],
  },
  {
    title: 'Mobile Application Development',
    short: 'Mobile apps',
    page: '/services/mobile-apps/',
    icon: 'mobile',
    tile: ['#8B5CF6', '#3B6EF5'],
    text: 'Native and cross-platform mobile applications for iOS and Android, designed around your users.',
    tags: ['iOS', 'Android', 'Cross-platform'],
  },
  {
    title: 'Web Application Development',
    short: 'Web apps',
    page: '/services/web-apps/',
    icon: 'globe',
    tile: ['#14B8A6', '#0284C7'],
    text: 'Websites, web applications and e-commerce platforms built for performance and growth.',
    tags: ['Websites', 'Web apps', 'E-commerce'],
  },
  {
    title: 'E-Invoicing',
    short: 'E-Invoicing',
    page: '/services/e-invoicing/',
    icon: 'invoice',
    tile: ['#FB923C', '#E11D48'],
    text: 'Get ready for e-invoicing mandates — we connect your ERP to an Accredited Service Provider (ASP) and keep every invoice compliant.',
    tags: ['ASP onboarding', 'ERP integration', 'Compliance'],
  },
  {
    title: 'Resource Outsourcing & Augmentation',
    short: 'Resource outsourcing',
    page: '/services/resource-outsourcing/',
    icon: 'users',
    tile: ['#6366F1', '#0EA5E9'],
    text: 'Skilled specialists and delivery governance for software development, project management, finance and IT support — faster delivery, lower risk, controlled cost.',
    tags: ['Software development', 'PMO', 'Finance', 'IT help desk'],
  },
  {
    title: 'Financial Consultancy',
    short: 'Financial consultancy',
    page: '/services/financial-consultancy/',
    icon: 'savings',
    tile: ['#F59E0B', '#EA580C'],
    text: 'Finance leadership for your business — operations, reporting, controls, process transformation and advisory, overseen and delivered by our finance team.',
    tags: ['Finance operations', 'Reporting', 'Controls', 'Advisory'],
  },
  {
    title: 'Program, Project & Portfolio Management',
    short: 'Program & Project Management',
    page: '/services/program-management/',
    icon: 'chart',
    tile: ['#14B8A6', '#2563EB'],
    text: 'Turning digital transformation ambition into delivered value — PMO design, delivery oversight, governance and reporting, handover and continuous improvement.',
    tags: ['PMO', 'Delivery oversight', 'Governance', 'Aftercare'],
  },
  {
    title: 'Enterprise AI Foundations',
    short: 'Data & AI',
    page: '/services/enterprise-ai/',
    techLogo: 'azure',
    text: 'Build the foundation for enterprise AI on Microsoft Azure — strategy, architecture, platform and AI readiness, plus Copilot, agents and RAG solutions.',
    tags: ['AI strategy', 'Azure', 'Copilot & agents', 'AI governance'],
  },
]

// Tribox's own products, each with a page (data/productPages.js). Used by the header's Products
// menu and the footer. `logo` names come from components/TechLogo.jsx; without one, `icon` and
// `tile` draw an app-style icon (see components/ServiceMark.jsx).
export const products = [
  { title: 'POS for Business Central', text: 'Point of sale for stores', page: '/products/pos-business-central/', logo: 'pos' },
  { title: 'POS for Finance & Operations', text: 'Point of sale for retail chains', page: '/products/pos-finance-operations/', logo: 'pos' },
  { title: 'SIS App', text: 'Many locations, one store', page: '/products/sis-app/', logo: 'sis' },
  { title: 'HRMS App', text: 'HR & employees', page: '/products/hrms-app/', logo: 'hr' },
  // No logo file: shown as an app-style tile (icon on a gradient), like some services
  { title: 'Fleet Track', text: 'Fleet & transport management', page: '/products/fleettrack/', icon: 'truck', tile: ['#0EA5E9', '#4F46E5'] },
]

// Technology & Advisory: one "Information Services" offer with six areas, shown as a tree on
// the home page. `icon` names come from components/Icon.jsx.
export const advisory = {
  label: 'Technology & Advisory',
  title: 'Technology &',
  accent: 'Advisory',
  root: 'Information Services',
  areas: [
    { icon: 'server', title: 'IT Infrastructure', text: 'Servers, networks, cloud & data center operations' },
    { icon: 'shield', title: 'Security Operations', text: 'Threat monitoring, IAM, and incident response' },
    { icon: 'chart', title: 'Platforms & Business Intelligence', text: 'Application platforms, analytics & reporting' },
    { icon: 'code', title: 'Agentic AI & Automation', text: 'Intelligent agents, workflow & process automation' },
    { icon: 'check', title: 'Governance, Risk & Compliance', text: 'Policy, risk management & regulatory compliance' },
    { icon: 'cloud', title: 'Digital Transformation', text: 'Modernization strategy & change enablement' },
  ],
}

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
  { name: 'Maryaz Studio', logo: '/logos/clients/maryaz-studio.png' },
  { name: 'Holborn Investment Company Limited', logo: '/logos/clients/holborn-investment.png' },
  { name: 'Aniqle', logo: '/logos/clients/aniqle.png' },
]

// Licences Tribox resells, shown under "How we work" on the home page. `logo` names come from
// components/TechLogo.jsx, `icon` names from components/Icon.jsx.
export const licences = {
  title: 'Licenses &',
  accent: 'partner authority',
  intro: 'Microsoft Partner Designation level. Odoo Partner and authorised reseller. Tribox FZCO has end-to-end authority over the licences, the delivery and the run.',
  badge: 'Authorised reseller',
  items: [
    { name: 'Microsoft 365', text: 'Productivity cloud for the whole enterprise.', logo: 'microsoft' },
    { name: 'Office 365', text: 'Word, Excel, PowerPoint, Outlook suites.', icon: 'invoice' },
    { name: 'Microsoft Teams', text: 'Meetings, chat, voice and rooms.', icon: 'users' },
    { name: 'Microsoft Azure', text: 'Compute, networking, AI and data platform.', logo: 'azure' },
    { name: 'Microsoft Dynamics 365', text: 'Finance, Supply Chain, Sales, Customer Service, Business Central.', logo: 'dynamics365' },
    { name: 'Microsoft Power Platform', text: 'Power Apps, Power Automate, Power Pages and Copilot Studio.', logo: 'powerPages' },
    { name: 'Microsoft Power BI', text: 'Enterprise analytics and AI insights.', logo: 'powerBi' },
    { name: 'Odoo', text: 'Open Source ERP for finance, sales, inventory, manufacturing, HR and CRM.', logo: 'odooWordmark' },
  ],
}

export const process = [
  { icon: 'mail', title: 'Drop us an email', text: 'Tell us about your business and the challenge you want to solve.' },
  { icon: 'users', title: 'Meet our professionals', text: 'Our consultants review your processes and systems with your team.' },
  { icon: 'check', title: 'Tailor-made solution', text: 'A dedicated tribe designs, delivers and supports your solution.' },
]
