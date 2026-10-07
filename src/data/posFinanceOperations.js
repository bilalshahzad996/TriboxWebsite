// Content for the POS for Finance & Operations product page (/products/pos-finance-operations/),
// laid out by components/ServicePage.jsx. `icon` names come from components/Icon.jsx, `logo` names
// from components/TechLogo.jsx. Product details should be checked against the actual product.

export const posFinanceOperationsPage = {
  path: '/products/pos-finance-operations/',
  product: true,
  serviceName: 'Tribox POS for Microsoft Dynamics 365 Finance & Operations',
  enquiry: {
    topic: 'POS for Finance & Operations',
    options: ['Product demo', 'Pricing', 'Rollout to our stores', 'Integration with our Finance & Operations', 'Support for an existing installation'],
  },
  meta: {
    title: 'POS for Dynamics 365 Finance & Operations — Tribox',
    description:
      'Tribox POS for Microsoft Dynamics 365 Finance & Operations: a point of sale for multi-store retailers that sells from your Finance & Operations products and prices and posts every sale back to it.',
  },

  hero: {
    label: 'Tribox POS for Finance & Operations',
    title: 'Point of sale for',
    accent: 'enterprise retail',
    text: 'A point of sale that works with Microsoft Dynamics 365 Finance & Operations — built for retailers with many stores, selling from your Finance & Operations products and prices and posting every sale back to it.',
    primary: 'Book a demo',
    secondary: 'See the features',
    modules: ['Fast checkout', 'Products & prices from F&O', 'Payments', 'Returns', 'Receipts', 'Shifts & cash', 'Many stores', 'Stock sync', 'Sales reports'],
  },

  panel: { logo: 'pos', title: 'Tribox POS', subtitle: 'For Dynamics 365 Finance & Operations' },

  headings: {
    challenges: { title: 'Where multi-store retail', accent: 'loses control' },
    capabilities: {
      title: 'POS',
      accent: 'features',
      intro: 'Everything your stores need at the counter, connected to the Finance & Operations that runs the rest of the business.',
    },
    process: { title: 'How a rollout', accent: 'runs' },
    industries: { title: 'Built for', accent: 'retail chains' },
    faqPrompt: 'Still have a question about the POS?',
  },

  challenges: [
    { tag: 'Many stores', title: 'Every store a little different', text: 'Separate tills and spreadsheets per store make group-wide figures hard to trust.' },
    { tag: 'Stock gaps', title: 'Stock out of step with sales', text: 'When sales reach the ERP late, replenishment and transfers fall behind.' },
    { tag: 'Pricing', title: 'Prices and promotions out of sync', text: 'Rolling out price changes to every store by hand is slow and error-prone.' },
    { tag: 'Reconciliation', title: 'Slow end-of-day close', text: 'Matching cash, cards and receipts across stores takes hours each day.' },
  ],

  approach: {
    label: 'How the POS works',
    title: 'One system from',
    accent: 'store to head office',
    lead: 'Tribox POS sells from the products, prices and customers in Finance & Operations and sends sales, payments and returns back — so every store and head office work from the same data.',
    text: 'We set it up for your stores, connect it to your Finance & Operations, train your staff, and support it after go-live.',
    delivers: ['Point of sale app', 'Finance & Operations integration', 'Store & till setup', 'Payment setup', 'Receipt layouts', 'Staff training', 'Go-live support', 'Ongoing support'],
  },

  capabilities: [
    {
      icon: 'savings',
      title: 'Fast checkout',
      text: 'A simple selling screen so staff can serve customers quickly, even at busy times.',
      points: ['Search or scan products', 'Discounts and promotions', 'Customer lookup', 'Printed or digital receipts'],
    },
    {
      icon: 'server',
      title: 'Finance & Operations integration',
      text: 'Products, prices and customers come from Finance & Operations; sales go back to it.',
      points: ['Products and prices from F&O', 'Sales posted back to F&O', 'Customers shared with head office', 'One set of figures across the group'],
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
      text: 'Open and close shifts with a clear record of what each till took.',
      points: ['Shift opening and closing', 'Cash counts', 'Payment totals by method', 'End-of-day summaries'],
    },
    {
      icon: 'network',
      title: 'Many stores',
      text: 'Run stores and tills across locations from one central setup.',
      points: ['Store and till configuration', 'Store-level prices', 'Stock by location', 'Central control from F&O'],
    },
    {
      icon: 'chart',
      title: 'Reporting',
      text: 'Sales by store, region, item and payment method — in Finance & Operations and Power BI.',
      points: ['Daily sales by store', 'Group-wide sales views', 'Payment method totals', 'Power BI dashboards'],
    },
  ],

  process: [
    { title: 'Discover', text: 'We review your stores, tills, payments and Finance & Operations setup.' },
    { title: 'Configure', text: 'The POS is set up for your stores and connected to Finance & Operations.' },
    { title: 'Pilot & train', text: 'We pilot in selected stores and train staff before the wider rollout.' },
    { title: 'Roll out & support', text: 'Store-by-store rollout, then ongoing support.' },
  ],

  industries: [
    { title: 'Retail chains', text: 'Many stores selling from one central catalogue and price list.' },
    { title: 'Fashion & lifestyle', text: 'Busy counters with frequent promotions and returns.' },
    { title: 'Grocery & convenience', text: 'High transaction volumes across many tills.' },
    { title: 'Department stores', text: 'Large stores with many counters and departments.' },
  ],

  engagements: [
    { kind: 'New stores', title: 'POS rollout', text: 'Setup, Finance & Operations integration, a pilot, training and store rollout.', best: 'Best for a new POS' },
    { kind: 'Ongoing', title: 'Support & updates', text: 'Help for store staff, updates and new features after go-live.', best: 'Best once you’re live' },
  ],

  faqs: [
    { q: 'What is Tribox POS for Finance & Operations?', a: 'A point of sale application that works with Microsoft Dynamics 365 Finance & Operations. It sells from your F&O products and prices and posts sales back to it.' },
    { q: 'Do we need Finance & Operations?', a: 'Yes. This edition is built for Dynamics 365 Finance & Operations. For Business Central, see our POS for Business Central.' },
    { q: 'Is it suited to many stores?', a: 'Yes. Stores and tills are set up centrally, and sales from every store flow back to Finance & Operations.' },
    { q: 'Which payment methods does it support?', a: 'Cash and card payments, including split payments. We confirm your payment terminals and providers during setup.' },
    { q: 'How is it rolled out?', a: 'Usually with a pilot in selected stores first, then store by store, with training and support at each step.' },
    { q: 'Can we see a demo?', a: 'Yes — book a demo using the form below and we’ll walk you through it.' },
  ],
}
