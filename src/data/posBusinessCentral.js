// Content for the POS for Business Central product page (/products/pos-business-central/), laid out
// by components/ServicePage.jsx. `icon` names come from components/Icon.jsx, `logo` names from
// components/TechLogo.jsx. Product details should be checked against the actual product.

export const posBusinessCentralPage = {
  path: '/products/pos-business-central/',
  // Search engines' structured data: a software product rather than a service
  product: true,
  serviceName: 'Tribox POS for Microsoft Dynamics 365 Business Central',
  enquiry: {
    topic: 'POS for Business Central',
    options: ['Product demo', 'Pricing', 'Rollout to our stores', 'Integration with our Business Central', 'Support for an existing installation'],
  },
  meta: {
    title: 'POS for Dynamics 365 Business Central — Tribox',
    description:
      'Tribox POS for Microsoft Dynamics 365 Business Central: a point of sale that sells from your Business Central items and prices and posts every sale, payment and return back to it.',
  },

  hero: {
    label: 'Tribox POS for Business Central',
    title: 'Point of sale, built for',
    accent: 'Business Central',
    text: 'A point of sale that works with Microsoft Dynamics 365 Business Central — selling from your Business Central items and prices, and posting every sale, payment and return straight back to it.',
    primary: 'Book a demo',
    secondary: 'See the features',
    modules: ['Fast checkout', 'Items & prices from BC', 'Payments', 'Returns', 'Receipts', 'Shifts & cash', 'Multiple stores', 'Stock sync', 'Sales reports'],
  },

  panel: { logo: 'pos', title: 'Tribox POS', subtitle: 'For Dynamics 365 Business Central' },

  headings: {
    challenges: { title: 'Where store sales and the', accent: 'back office drift apart' },
    capabilities: {
      title: 'POS',
      accent: 'features',
      intro: 'Everything a store needs at the counter, connected to the Business Central your finance team already uses.',
    },
    process: { title: 'How a rollout', accent: 'runs' },
    industries: { title: 'Built for', accent: 'retail' },
    faqPrompt: 'Still have a question about the POS?',
  },

  challenges: [
    { tag: 'Double entry', title: 'Sales typed in twice', text: 'When the till and the ERP are separate, someone re-keys the day’s sales — and mistakes creep in.' },
    { tag: 'Stock gaps', title: 'Stock that never matches', text: 'Without sales flowing into the ERP, stock levels drift and reorders come too late.' },
    { tag: 'Price changes', title: 'Prices updated store by store', text: 'Changing prices and promotions on each till by hand is slow and error-prone.' },
    { tag: 'End of day', title: 'Slow closing and cash-up', text: 'Reconciling cash, cards and receipts at the end of each shift takes longer than it should.' },
  ],

  approach: {
    label: 'How the POS works',
    title: 'One system from',
    accent: 'counter to ledger',
    lead: 'Tribox POS sells from the items, prices and customers in Business Central, and sends sales, payments and returns back to it — so stores and the back office work from the same data.',
    text: 'We set it up for your stores, connect it to your Business Central, train your staff, and support it after go-live.',
    delivers: ['Point of sale app', 'Business Central integration', 'Store & till setup', 'Payment setup', 'Receipt layouts', 'Staff training', 'Go-live support', 'Ongoing support'],
  },

  capabilities: [
    {
      icon: 'savings',
      title: 'Fast checkout',
      text: 'A simple selling screen so staff can serve customers quickly.',
      points: ['Search or scan items', 'Discounts and promotions', 'Customer lookup', 'Printed or digital receipts'],
    },
    {
      icon: 'server',
      title: 'Business Central integration',
      text: 'Items, prices and customers come from Business Central; sales go back to it.',
      points: ['Items and prices from Business Central', 'Sales posted back to Business Central', 'Customers shared with the back office', 'One set of figures for finance'],
    },
    {
      icon: 'invoice',
      title: 'Payments & returns',
      text: 'Take payment the way customers want to pay, and handle returns properly.',
      points: ['Cash and card payments', 'Split payments', 'Returns and refunds', 'Receipts for every transaction'],
    },
    {
      icon: 'clock',
      title: 'Shifts & cash management',
      text: 'Open and close shifts with a clear record of what was taken.',
      points: ['Shift opening and closing', 'Cash counts', 'Payment totals by method', 'End-of-day summaries'],
    },
    {
      icon: 'network',
      title: 'Multiple stores',
      text: 'Run several stores and tills from one setup.',
      points: ['Store and till configuration', 'Store-level prices', 'Stock by location', 'Central control from Business Central'],
    },
    {
      icon: 'chart',
      title: 'Reporting',
      text: 'Sales by store, till, item and payment method — in Business Central and Power BI.',
      points: ['Daily sales summaries', 'Sales by store and item', 'Payment method totals', 'Power BI dashboards'],
    },
  ],

  process: [
    { title: 'Discover', text: 'We review your stores, tills, payments and Business Central setup.' },
    { title: 'Configure', text: 'The POS is set up for your stores and connected to Business Central.' },
    { title: 'Test & train', text: 'We test with your team and train store staff before go-live.' },
    { title: 'Go live & support', text: 'A supported go-live in your stores, then ongoing support.' },
  ],

  industries: [
    { title: 'Retail stores', text: 'Single shops and chains selling from one shared product catalogue.' },
    { title: 'Fashion & lifestyle', text: 'Busy counters with frequent promotions and returns.' },
    { title: 'Electronics', text: 'Higher-value sales with customers on record.' },
    { title: 'Showrooms', text: 'Sales recorded on the floor and posted straight to the ERP.' },
  ],

  engagements: [
    { kind: 'New stores', title: 'POS rollout', text: 'Setup, Business Central integration, training and go-live for your stores.', best: 'Best for a new POS' },
    { kind: 'Ongoing', title: 'Support & updates', text: 'Help for store staff, updates and new features after go-live.', best: 'Best once you’re live' },
  ],

  faqs: [
    { q: 'What is Tribox POS for Business Central?', a: 'A point of sale application that works with Microsoft Dynamics 365 Business Central. It sells from your Business Central items and prices and posts sales back to it.' },
    { q: 'Do we need Business Central?', a: 'Yes. This edition is built to work with Dynamics 365 Business Central. For Dynamics 365 Finance & Operations, see our POS for Finance & Operations.' },
    { q: 'Can it run several stores?', a: 'Yes. Stores and tills are set up centrally, each with its own location for stock.' },
    { q: 'Which payment methods does it support?', a: 'Cash and card payments, including split payments. We confirm your payment terminals and providers during setup.' },
    { q: 'Do you help with setup and training?', a: 'Yes. We configure the POS, connect it to your Business Central, train your staff and support you at go-live.' },
    { q: 'Can we see a demo?', a: 'Yes — book a demo using the form below and we’ll walk you through it.' },
  ],
}
