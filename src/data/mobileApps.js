// Content for the Mobile Apps service page (/services/mobile-apps/), laid out by
// components/ServicePage.jsx. `icon` names come from components/Icon.jsx, `logo` names from
// components/TechLogo.jsx.

export const mobileAppsPage = {
  path: '/services/mobile-apps/',
  // Name and type of the service in search engines' structured data
  serviceName: 'Mobile application development for iOS and Android',
  serviceType: 'Mobile app development',
  // Contact form: shown in "What do you need help with?"; enquiries are labelled with `topic`
  enquiry: {
    topic: 'Mobile Apps',
    options: [
      'New mobile app',
      'iOS app',
      'Android app',
      'Cross-platform app',
      'App connected to our ERP or CRM',
      'Redesign of an existing app',
      'App store publishing',
      'Support & updates',
    ],
  },
  meta: {
    title: 'Mobile App Development for iOS & Android — Tribox',
    description:
      'Tribox designs and builds native and cross-platform mobile apps for iOS and Android — connected to your business systems, published to the app stores and supported after launch.',
  },

  hero: {
    label: 'Mobile Application Development',
    title: 'Mobile apps your users',
    accent: 'actually enjoy',
    text: 'We design and build native and cross-platform apps for iOS and Android — for your customers, your field teams and your partners — connected to the systems you already run.',
    primary: 'Book a free consultation',
    secondary: 'See what we deliver',
    modules: ['iOS apps', 'Android apps', 'Cross-platform', 'UX & UI design', 'Offline mode', 'Push notifications', 'Payments', 'ERP & CRM sync', 'App store publishing'],
  },

  // Box beside the hero headline (an icon, as there is no product logo)
  panel: { icon: 'mobile', title: 'Mobile apps', subtitle: 'iOS and Android, designed around your users' },

  headings: {
    challenges: { title: 'Where mobile projects', accent: 'go wrong' },
    capabilities: {
      title: 'Mobile app',
      accent: 'capabilities',
      intro: 'Everything it takes to plan, build and run your app — from the first sketch to the next store release.',
    },
    process: { title: 'How an app project', accent: 'runs' },
    tools: { title: 'Built with', accent: 'modern mobile technology' },
    industries: { title: 'Mobile apps for', accent: 'your industry' },
    faqPrompt: 'Still have a question about your app?',
  },

  challenges: [
    { tag: 'Paper and phone calls', title: 'Field work tracked on paper', text: 'Orders, deliveries and inspections recorded by hand reach the office late and incomplete.' },
    { tag: 'Poor experience', title: 'Apps people uninstall', text: 'Slow, confusing apps collect bad reviews and get deleted after the first use.' },
    { tag: 'Two codebases', title: 'Double the effort for iOS and Android', text: 'Building and maintaining two separate apps without a plan doubles the work.' },
    { tag: 'Disconnected data', title: 'Apps that don’t talk to your systems', text: 'When an app isn’t connected to your ERP or CRM, staff re-key what customers already entered.' },
  ],

  approach: {
    label: 'How we deliver mobile apps',
    title: 'One team from',
    accent: 'idea to app store',
    lead: 'Mobile development at Tribox covers the whole journey — discovery, design, development, integration with your systems, store publishing, and the updates that keep your app running well on new devices.',
    text: 'Your team stays in control of the app, the content and the data; we handle the design, the engineering and the releases.',
    delivers: [
      'UX & UI design',
      'iOS apps',
      'Android apps',
      'Cross-platform apps',
      'API & ERP integration',
      'Testing on real devices',
      'App store publishing',
      'Support & updates',
    ],
  },

  capabilities: [
    {
      icon: 'mobile',
      title: 'Native apps',
      text: 'iOS and Android apps built for each platform, when you need top performance or deep device features.',
      points: [
        'Swift for iOS, Kotlin for Android',
        'Camera, location and sensors',
        'A smooth, platform-native feel',
        'Built to each store’s guidelines',
      ],
    },
    {
      icon: 'code',
      title: 'Cross-platform apps',
      text: 'One codebase for iOS and Android, so you launch on both for less effort.',
      points: [
        'Shared code across platforms',
        'Native look and feel',
        'Faster updates to both stores',
        'Lower long-term maintenance',
      ],
    },
    {
      icon: 'globe',
      title: 'UX & UI design',
      text: 'Screens designed around your users and tested before development starts.',
      points: [
        'User flows and wireframes',
        'Visual design in your brand',
        'Clickable prototypes to test early',
        'Accessibility built in',
      ],
    },
    {
      icon: 'network',
      title: 'Integrations & APIs',
      text: 'Apps connected to the systems behind them, so data flows both ways.',
      points: [
        'Dynamics 365, Business Central and Odoo',
        'Payments, maps and messaging',
        'Secure APIs and sign-in',
        'Offline mode that syncs later',
      ],
    },
    {
      icon: 'check',
      title: 'Testing & publishing',
      text: 'Testing on real devices, then a smooth release to the App Store and Google Play.',
      points: [
        'Testing across devices and OS versions',
        'Beta releases for early feedback',
        'Store listings and the review process',
        'A release plan for every update',
      ],
    },
    {
      icon: 'support',
      title: 'Support & updates',
      text: 'Ongoing updates so your app keeps working on new devices and OS versions.',
      points: [
        'Monitoring and crash reports',
        'Updates for new devices and OS versions',
        'New features as your needs grow',
        'Security updates',
      ],
    },
  ],

  process: [
    { title: 'Discover & plan', text: 'Workshops to understand your users, goals and systems, then agree features, scope and timeline.' },
    { title: 'Design & prototype', text: 'User flows, screens and a clickable prototype you review before development starts.' },
    { title: 'Build & test', text: 'Development in short steps you can try on your own phone, with testing on real devices.' },
    { title: 'Launch & support', text: 'Publishing to the App Store and Google Play, then updates and new features as you grow.' },
  ],

  tools: [
    // Platforms and their native languages
    { name: 'iOS', logo: 'apple' },
    { name: 'Android', logo: 'android' },
    { name: 'Swift (iOS)', logo: 'swift' },
    { name: 'Kotlin (Android)', logo: 'kotlin' },
    // Cross-platform and back end
    { name: 'React Native', logo: 'react' },
    { name: 'Flutter', logo: 'flutter' },
    { name: 'Firebase', logo: 'firebase' },
  ],

  industries: [
    { title: 'Field services', text: 'Jobs, inspections and signatures captured on site and synced to the office.' },
    { title: 'Retail & e-commerce', text: 'Shopping apps with loyalty, offers and orders linked to your store.' },
    { title: 'Distribution & logistics', text: 'Order taking, delivery tracking and proof of delivery for drivers and sales reps.' },
    { title: 'Customer service', text: 'Self-service apps where customers track orders, raise requests and get updates.' },
  ],

  engagements: [
    {
      kind: 'Project based',
      title: 'New app',
      text: 'End-to-end design, development and launch of a new iOS, Android or cross-platform app.',
      best: 'Best for a defined launch',
    },
    {
      kind: 'Ongoing',
      title: 'Support & growth',
      text: 'A dedicated team for updates, new features and store releases after launch — including apps another team built.',
      best: 'Best for apps already live',
    },
  ],

  faqs: [
    {
      q: 'Native or cross-platform?',
      a: 'Cross-platform suits most business apps and launches on both stores from one codebase. Native is best when you need top performance or deep device features. We recommend the right fit for your app.',
    },
    {
      q: 'How long does it take to build an app?',
      a: 'It depends on the features, the platforms and the integrations involved. We agree a timeline after the discovery workshops, and can launch a first version early and add to it.',
    },
    {
      q: 'Can the app connect to our ERP or CRM?',
      a: 'Yes. We connect apps to Dynamics 365, Business Central, Odoo and other systems through secure APIs, so data stays in sync both ways.',
    },
    {
      q: 'Do you publish to the App Store and Google Play?',
      a: 'Yes. We prepare the store listings, handle the review process and manage each release, published under your company’s developer accounts.',
    },
    {
      q: 'Can the app work offline?',
      a: 'Yes, where it’s needed. Data is stored on the device and synced when the connection returns.',
    },
    {
      q: 'Do you support the app after launch?',
      a: 'Yes. We monitor the app, keep it working on new devices and OS versions, and add features as your needs grow. We can also take over an app another team built.',
    },
  ],
}
