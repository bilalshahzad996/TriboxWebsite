// Content for the SIS (Shop in Shop) App product page (/products/sis-app/), laid out by
// components/ServicePage.jsx. SIS App runs several shops inside one store, each with its own
// warehouse (stock). `icon` names come from components/Icon.jsx, `logo` names from
// components/TechLogo.jsx. Product details should be checked against the actual product.

export const sisAppPage = {
  path: '/products/sis-app/',
  product: true,
  serviceName: 'Tribox Shop in Shop (SIS) App',
  enquiry: {
    topic: 'SIS App',
    options: ['Product demo', 'Pricing', 'Setting up shops in our store', 'Integration with our ERP', 'Support for an existing installation'],
  },
  meta: {
    title: 'Shop in Shop (SIS) App: Multiple Warehouses in One Store — Tribox',
    description:
      'Tribox Shop in Shop (SIS) App runs several shops inside one store, each with its own warehouse: stock and sales by shop, transfers between shops, and one view of the whole store.',
  },

  hero: {
    label: 'Tribox Shop in Shop App',
    title: 'Many shops, one store, with',
    accent: 'SIS App',
    text: 'Run several shops inside one store — each with its own warehouse and stock — and still see and manage the whole store in one place.',
    primary: 'Book a demo',
    secondary: 'See the features',
    modules: ['Shops in one store', 'Warehouse per shop', 'Stock by shop', 'Transfers between shops', 'Sales by shop', 'Whole-store view', 'Stock counts', 'Reports', 'ERP integration'],
  },

  panel: { logo: 'sis', title: 'SIS App', subtitle: 'Multiple warehouses in one store' },

  headings: {
    challenges: { title: 'Where one store with many shops', accent: 'gets complicated' },
    capabilities: {
      title: 'SIS App',
      accent: 'features',
      intro: 'Everything you need to run separate shops — and their stock — under one roof.',
    },
    process: { title: 'How a rollout', accent: 'runs' },
    industries: { title: 'Built for', accent: 'stores with many shops' },
    faqPrompt: 'Still have a question about the SIS App?',
  },

  challenges: [
    { tag: 'Mixed stock', title: 'All shops share one stock count', text: 'When every shop in the store draws from one stock figure, nobody knows what each shop really holds.' },
    { tag: 'Moving stock', title: 'Transfers that go unrecorded', text: 'Stock moved from one shop to another by hand gets lost from the records.' },
    { tag: 'Performance', title: 'No clear figures per shop', text: 'Without sales and stock by shop, it’s hard to see which shops perform and which need attention.' },
    { tag: 'Stock counts', title: 'Counting the whole store at once', text: 'Checking stock is slow and disruptive when shops can’t be counted separately.' },
  ],

  approach: {
    label: 'How SIS App works',
    title: 'Separate shops,',
    accent: 'one store',
    lead: 'In SIS App each shop inside your store has its own warehouse, so stock, transfers and sales are tracked shop by shop — while you keep one view of the whole store.',
    text: 'We set it up for your store and its shops, connect it to your systems, train your team, and support it after go-live.',
    delivers: ['SIS App setup', 'Shop & warehouse setup', 'Stock by shop', 'Transfers between shops', 'Sales by shop', 'ERP integration', 'Staff training', 'Ongoing support'],
  },

  capabilities: [
    {
      icon: 'network',
      title: 'Shops in one store',
      text: 'Set up each shop inside your store with its own warehouse.',
      points: ['Several shops under one store', 'A warehouse for each shop', 'Shop-level settings', 'Room to add shops later'],
    },
    {
      icon: 'server',
      title: 'Stock by shop',
      text: 'Know exactly what stock each shop holds.',
      points: ['Stock levels per shop', 'Stock movements in and out', 'Low-stock visibility', 'One total for the whole store'],
    },
    {
      icon: 'savings',
      title: 'Transfers between shops',
      text: 'Move stock from one shop to another with a proper record.',
      points: ['Transfers between shop warehouses', 'Every movement recorded', 'Stock updated in both shops', 'A full transfer history'],
    },
    {
      icon: 'chart',
      title: 'Sales by shop',
      text: 'See what each shop sells, and how the whole store is doing.',
      points: ['Sales recorded per shop', 'Daily and monthly views', 'Shop-by-shop comparison', 'Whole-store totals'],
    },
    {
      icon: 'check',
      title: 'Stock counts',
      text: 'Count stock shop by shop, without closing the whole store.',
      points: ['Counts per shop warehouse', 'Differences highlighted', 'Adjustments recorded', 'Clear records for audits'],
    },
    {
      icon: 'shield',
      title: 'Integration & access',
      text: 'Connected to your systems, with the right access for each team.',
      points: ['ERP integration', 'One set of figures for finance', 'User roles by shop', 'Ongoing support'],
    },
  ],

  process: [
    { title: 'Discover', text: 'We review your store, its shops and how stock moves between them.' },
    { title: 'Configure', text: 'Shops and their warehouses are set up and connected to your systems.' },
    { title: 'Test & train', text: 'We test with real stock movements and train your team before go-live.' },
    { title: 'Go live & support', text: 'A supported go-live, then ongoing support as your store grows.' },
  ],

  industries: [
    { title: 'Department stores', text: 'Separate departments run as shops, each with its own stock.' },
    { title: 'Hypermarkets', text: 'Large stores split into sections that manage their own stock.' },
    { title: 'Multi-category retail', text: 'Fashion, electronics and home under one roof, kept apart in stock.' },
    { title: 'Malls & retail complexes', text: 'Several shops operated by one business in one location.' },
  ],

  engagements: [
    { kind: 'New setup', title: 'SIS rollout', text: 'Setup for your store and its shops, integration, training and go-live.', best: 'Best for a new setup' },
    { kind: 'Ongoing', title: 'Support & updates', text: 'Help for your team, updates and new shops after go-live.', best: 'Best once you’re live' },
  ],

  faqs: [
    { q: 'What does “Shop in Shop” mean here?', a: 'One store run as several shops, where each shop has its own warehouse and stock — so you can manage every shop separately while still seeing the whole store.' },
    { q: 'Can stock move between shops?', a: 'Yes. Transfers between shop warehouses are recorded, and stock is updated in both shops.' },
    { q: 'Can we see the whole store as well as each shop?', a: 'Yes. Stock and sales are available shop by shop and as totals for the whole store.' },
    { q: 'Does it work with our ERP?', a: 'SIS App is designed to connect to the systems you already run. We confirm the integration with your ERP during setup.' },
    { q: 'Can we add shops later?', a: 'Yes. New shops and their warehouses can be added as your store changes.' },
    { q: 'Can we see a demo?', a: 'Yes — book a demo using the form below and we’ll walk you through it.' },
  ],
}
