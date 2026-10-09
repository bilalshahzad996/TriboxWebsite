// Content for the Licenses & Partner Authority service page (/services/licensing/), laid out by
// components/ServicePage.jsx. The licences themselves come from `licences` in data/site.js.

export const licensingPage = {
  path: '/services/licensing/',
  // Name and type of the service in search engines' structured data
  serviceName: 'Microsoft and Odoo licensing',
  serviceType: 'Software licensing and reselling',
  // Contact form: shown in "What do you need help with?"; enquiries are labelled with `topic`
  enquiry: {
    topic: 'Licensing',
    options: [
      'Microsoft 365 / Office 365 / Teams',
      'Dynamics 365 licences',
      'Microsoft Azure',
      'Power Platform / Power BI',
      'Odoo',
      'Review our current licences',
    ],
  },
  meta: {
    title: 'Licenses & Partner Authority — Microsoft and Odoo — Tribox',
    description:
      'Tribox is a Microsoft Partner and an Odoo Partner and authorised reseller, with end-to-end authority over the licences, the delivery and the run.',
  },

  hero: {
    label: 'Licenses & Partner Authority',
    title: 'Licences, delivery and run,',
    accent: 'from one partner',
    text: 'Microsoft Partner Designation level. Odoo Partner and authorised reseller. Tribox FZCO has end-to-end authority over the licences, the delivery and the run.',
    primary: 'Talk to us about licences',
    secondary: 'See the licences',
    secondaryHref: '#licences',
    modules: ['Microsoft 365', 'Office 365', 'Microsoft Teams', 'Microsoft Azure', 'Dynamics 365', 'Power Platform', 'Power BI', 'Odoo'],
  },

  // Box beside the hero headline
  panel: { icon: 'shield', title: 'Authorised reseller', subtitle: 'Microsoft Partner and Odoo Partner' },

  // The licence grid (see Licences in components/ServicePage.jsx)
  licences: {
    label: 'Our licences',
    title: 'Licenses &',
    accent: 'partner authority',
  },

  headings: {
    faqPrompt: 'Still have a question about licensing?',
  },

  faqs: [
    {
      q: 'Is Tribox an authorised reseller?',
      a: 'Yes. Tribox is a Microsoft Partner and an Odoo Partner and authorised reseller, with end-to-end authority over the licences, the delivery and the run.',
    },
    {
      q: 'Which licences can you supply?',
      a: 'Microsoft 365, Office 365, Microsoft Teams, Microsoft Azure, Microsoft Dynamics 365, Microsoft Power Platform, Microsoft Power BI and Odoo.',
    },
    {
      q: 'Can you also implement and support what you license?',
      a: 'Yes. Because we hold the licences, the delivery and the run, licensing, implementation and ongoing support all come from one partner.',
    },
  ],
}
