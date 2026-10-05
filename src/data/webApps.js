// Content for the Web Apps service page (/services/web-apps/), laid out by
// components/ServicePage.jsx. `icon` names come from components/Icon.jsx, `logo` names from
// components/TechLogo.jsx.

export const webAppsPage = {
  path: '/services/web-apps/',
  // Name and type of the service in search engines' structured data
  serviceName: 'Website and web application development',
  serviceType: 'Web development',
  // Contact form: shown in "What do you need help with?"; enquiries are labelled with `topic`
  enquiry: {
    topic: 'Web Apps',
    options: [
      'New website',
      'Website redesign',
      'Web application',
      'E-commerce store',
      'Customer or partner portal',
      'Integration with our ERP',
      'SEO & performance',
      'Hosting & support',
    ],
  },
  meta: {
    title: 'Website & Web Application Development — Tribox',
    description:
      'Tribox designs and builds websites, web applications, e-commerce stores and customer portals that are fast, secure and connected to your ERP — with hosting and ongoing support.',
  },

  hero: {
    label: 'Web Application Development',
    title: 'Websites and web apps',
    accent: 'built to grow with you',
    text: 'We design and build websites, web applications and online stores for growing businesses — fast, secure, easy to find in search, and connected to the systems you already run.',
    primary: 'Book a free consultation',
    secondary: 'See what we deliver',
    modules: ['Websites', 'Web apps', 'E-commerce', 'Customer portals', 'Dashboards', 'APIs & integrations', 'Content management', 'SEO & speed', 'Hosting & support'],
  },

  // Box beside the hero headline
  panel: { logo: 'react', title: 'Web development', subtitle: 'Built for performance and growth' },

  headings: {
    challenges: { title: 'Where websites and web tools', accent: 'hold businesses back' },
    capabilities: {
      title: 'Web development',
      accent: 'capabilities',
      intro: 'Everything it takes to plan, build and run your site or application — from the first wireframe to the next release.',
    },
    process: { title: 'How a web project', accent: 'runs' },
    tools: { title: 'Built with', accent: 'modern web technology' },
    industries: { title: 'Web solutions for', accent: 'your industry' },
    faqPrompt: 'Still have a question about your web project?',
  },

  challenges: [
    { tag: 'Outdated website', title: 'A site that no longer reflects you', text: 'Old design, slow pages and content nobody can update make a poor first impression.' },
    { tag: 'Manual processes', title: 'Work stuck in email and spreadsheets', text: 'Orders, requests and approvals passed around by hand slow teams down and get lost.' },
    { tag: 'Hard to find', title: 'Visitors leave before it loads', text: 'Pages that load slowly or rank poorly in search cost you enquiries every day.' },
    { tag: 'Disconnected systems', title: 'Web tools that don’t talk to your ERP', text: 'When your site, store and back office aren’t connected, the same data gets typed in twice.' },
  ],

  approach: {
    label: 'How we deliver web projects',
    title: 'One team from',
    accent: 'idea to launch',
    lead: 'Web development at Tribox covers the whole journey — planning, design, development, integrations, launch, and the support that keeps your site or application fast, secure and up to date.',
    text: 'Your team stays in control of the content and the data; we handle the design, the engineering and the upkeep.',
    delivers: [
      'UX & UI design',
      'Websites',
      'Web applications',
      'E-commerce',
      'Customer portals',
      'ERP & API integrations',
      'SEO & performance',
      'Hosting & support',
    ],
  },

  capabilities: [
    {
      icon: 'globe',
      title: 'Websites',
      text: 'Company websites that load fast, look right on every screen and are easy for your team to update.',
      points: [
        'Design shaped around your brand',
        'Responsive on phones, tablets and desktops',
        'Content your team can edit',
        'Search-friendly structure and page titles',
      ],
    },
    {
      icon: 'code',
      title: 'Web applications',
      text: 'Custom applications that move your processes out of email and spreadsheets and into one place.',
      points: [
        'Workflows, approvals and dashboards',
        'User roles and secure sign-in',
        'Built for the way your team works',
        'Designed to grow with new features',
      ],
    },
    {
      icon: 'savings',
      title: 'E-commerce',
      text: 'Online stores that are simple to shop and simple to run, with stock and orders kept in sync.',
      points: [
        'Product catalogue and checkout',
        'Payment gateway integration',
        'Orders and stock linked to your ERP',
        'Promotions and customer accounts',
      ],
    },
    {
      icon: 'users',
      title: 'Customer & partner portals',
      text: 'Self-service portals where customers and partners find what they need without calling your team.',
      points: [
        'Orders, invoices and documents online',
        'Requests and tickets in one place',
        'Secure access for each account',
        'Data straight from your business systems',
      ],
    },
    {
      icon: 'network',
      title: 'Integrations & APIs',
      text: 'Connecting your site or application to the systems behind it, so data flows without re-keying.',
      points: [
        'Dynamics 365, Business Central and Odoo',
        'Payment, shipping and email services',
        'APIs for your mobile and partner apps',
        'Data sync you can rely on',
      ],
    },
    {
      icon: 'support',
      title: 'Hosting & support',
      text: 'Hosting, monitoring and upkeep after launch, so your site stays fast, secure and current.',
      points: [
        'Cloud hosting and backups',
        'Security updates and monitoring',
        'Speed and search performance reviews',
        'New features as your needs grow',
      ],
    },
  ],

  process: [
    { title: 'Discover & plan', text: 'Workshops to understand your goals, users and content, then agree scope and timeline.' },
    { title: 'Design', text: 'Wireframes and visual designs you review and approve before anything is built.' },
    { title: 'Build & test', text: 'Development in short steps you can see, with testing on real devices and browsers.' },
    { title: 'Launch & support', text: 'A smooth launch, then hosting, updates and improvements as you grow.' },
  ],

  tools: [
    { name: 'React', logo: 'react' },
    { name: '.NET', logo: 'dotnet' },
    { name: 'WordPress', logo: 'wordpress' },
    { name: 'Microsoft Azure', logo: 'azure' },
    { name: 'Power Pages', logo: 'powerPages' },
  ],

  industries: [
    { title: 'Retail & e-commerce', text: 'Online stores and promotions, with orders and stock flowing straight into your back office.' },
    { title: 'Distribution & logistics', text: 'Ordering portals and delivery tracking for customers, drivers and partners.' },
    { title: 'Professional services', text: 'Websites that win enquiries, and client portals for documents, bookings and invoices.' },
    { title: 'Startups & new products', text: 'From first version to scale, built so new features are quick to add.' },
  ],

  engagements: [
    {
      kind: 'Project based',
      title: 'New build',
      text: 'End-to-end design and development of a new website, web application or online store.',
      best: 'Best for a defined launch',
    },
    {
      kind: 'Ongoing',
      title: 'Support & growth',
      text: 'A dedicated team for updates, new features, hosting and performance after launch — including sites another team built.',
      best: 'Best for sites already live',
    },
  ],

  faqs: [
    {
      q: 'What kind of web projects do you take on?',
      a: 'Company websites, web applications, e-commerce stores and customer or partner portals — from a few pages to larger systems connected to your ERP.',
    },
    {
      q: 'How long does a project take?',
      a: 'It depends on the size of the site or application and the integrations involved. We agree a timeline after the discovery workshops, and can launch in stages where that gets you live sooner.',
    },
    {
      q: 'Which technologies do you use?',
      a: 'We choose the stack for the job: React for fast, interactive front ends, .NET for business applications and APIs, WordPress where your team wants to edit content easily, and Microsoft Azure for hosting.',
    },
    {
      q: 'Can it connect to our ERP?',
      a: 'Yes. We integrate websites and web applications with Dynamics 365, Business Central, Odoo and other systems through their APIs, so customers, orders and stock stay in sync.',
    },
    {
      q: 'Will it work well on phones and in search?',
      a: 'Yes. Everything we build is responsive and built with search engines in mind — clean page structure, titles and descriptions, and attention to page speed.',
    },
    {
      q: 'Can we update the content ourselves?',
      a: 'Yes, where you need to. We can build on a content management system such as WordPress, or add an admin area to your application, and train your team to use it.',
    },
    {
      q: 'Do you provide hosting and support after launch?',
      a: 'Yes. We can host and monitor your site or application, keep it updated and secure, and add features as your needs grow. We can also take over a site another team built.',
    },
  ],
}
