// Content for the Fleet Track product page (/products/fleettrack/), laid out by
// components/ServicePage.jsx. `icon` names come from components/Icon.jsx, `logo` names from
// components/TechLogo.jsx. The client it was first built for is deliberately not named.

export const fleettrackPage = {
  path: '/products/fleettrack/',
  product: true,
  serviceName: 'Fleet Track: transport operations and fleet management system',
  enquiry: {
    topic: 'Fleet Track',
    options: ['Product demo', 'Pricing', 'Moving from spreadsheets or another system', 'Customisation for our operation', 'Support for an existing installation'],
  },
  meta: {
    title: 'Fleet Track: Transport Operations & Fleet Management — Tribox',
    description:
      'Fleet Track is a fleet and transport management system for trucking and logistics companies: booking and dispatch, live trip tracking, contracts and pricing, billing, fleet maintenance, weighbridge and reporting in one secure system.',
  },

  hero: {
    label: 'Fleet Track',
    title: 'Run your whole fleet from',
    accent: 'one system',
    text: 'Fleet Track is a fleet and transport management system for trucking and logistics companies — covering every journey from booking and dispatch to live trip tracking, billing and reporting, so dispatch, gate, finance and maintenance teams all work from the same data.',
    primary: 'Book a demo',
    secondary: 'See the features',
    modules: ['Booking & dispatch', 'Trip tracking', 'Fleet control board', 'Contracts & pricing', 'Billing', 'Maintenance', 'Weighbridge', 'Reports', 'Role-based access'],
  },

  panel: { icon: 'truck', tile: ['#0EA5E9', '#4F46E5'], title: 'Fleet Track', subtitle: 'Transport operations & fleet management' },

  // Product screenshots shown as a browser-window showcase (see Gallery in components/ServicePage.jsx).
  // The pictures are in public/products/fleettrack/. Hovering a window slowly scrolls through the page.
  gallery: {
    label: 'Product tour',
    title: 'See Fleet Track',
    accent: 'in action',
    intro: 'Real screens from the system: the operations workspace, fleet control, the dispatcher\'s action centre and security roles.',
    url: 'fleettrack.tribox365.com',
    shots: [
      { id: 'operations-workspace', title: 'Operations workspace', text: 'Journeys today, fleet schedule, status and volume at a glance.', width: 1910, height: 1993 },
      { id: 'fleet-control', title: 'Fleet control', text: 'Live operations, commitments, customer issues and contract coverage.', width: 1910, height: 1590 },
      { id: 'operations-action-center', title: 'Operations action center', text: 'The dispatcher\'s live queue: trucks going out and coming back.', width: 1910, height: 1548 },
      { id: 'security-roles', title: 'Security roles', text: 'Role-based access, with users and profiles for every role.', width: 1910, height: 915 },
    ],
  },

  headings: {
    challenges: { title: 'Where transport operations', accent: 'lose time and money' },
    capabilities: {
      title: 'Fleet Track',
      accent: 'features',
      intro: 'Everything a transport operator needs, from the first booking to the final invoice.',
    },
    process: { title: 'How a rollout', accent: 'runs' },
    tools: { title: 'Built on', accent: 'modern web technology' },
    industries: { title: 'Built for', accent: 'transport and logistics' },
    faqPrompt: 'Still have a question about Fleet Track?',
  },

  challenges: [
    { tag: 'Spreadsheets', title: 'Dispatch run from spreadsheets', text: 'Bookings, schedules and billing spread across files that only one person can safely edit at a time.' },
    { tag: 'Double-booking', title: 'One truck, two jobs', text: 'Without checks, two dispatchers can book the same truck, trailer or driver for overlapping journeys.' },
    { tag: 'Late billing', title: 'Trips finished, invoices forgotten', text: 'When billing is separate from operations, completed trips go unbilled and cash comes in late.' },
    { tag: 'Unsafe vehicles', title: 'Defects that don’t stop dispatch', text: 'If maintenance and dispatch don’t talk, a vehicle with a critical defect can still be sent on a job.' },
  ],

  approach: {
    label: 'How Fleet Track works',
    title: 'Every journey,',
    accent: 'from booking to invoice',
    lead: 'Fleet Track follows each journey from planning and dispatch through the trip itself to billing — with business rules checked on the server, so the same truck, trailer or driver can’t be booked twice.',
    text: 'Every action is recorded in a full audit trail, and each team sees only what its role allows.',
    delivers: ['Booking & dispatch', 'Trip lifecycle', 'Operations control', 'Contracts & pricing', 'Billing & statements', 'Fleet maintenance', 'Weighbridge', 'Reports & dashboards'],
  },

  capabilities: [
    {
      icon: 'clock',
      title: 'Booking & dispatch',
      text: 'Plan journeys with automatic arrival times and catch conflicts before they happen.',
      points: ['Automatic ETAs and reporting times', 'Conflict checks for trucks, trailers and drivers', 'Next-availability finder for free slots', 'Rules checked again on the server'],
    },
    {
      icon: 'truck',
      title: 'Trip lifecycle',
      text: 'Follow every trip from start to close-out.',
      points: ['Start, leg updates and stop arrivals', 'Rescheduling with reason codes', 'Extra stops and trip documents', 'Real travel times improve future ETAs'],
    },
    {
      icon: 'network',
      title: 'Operations control',
      text: 'See the whole fleet at a glance and act before journeys run late.',
      points: ['Fleet control board and timeline', 'Action centre with outgoing and incoming queues', 'Risk cards for journeys likely to run late', 'Click through to the underlying records'],
    },
    {
      icon: 'invoice',
      title: 'Contracts, pricing & billing',
      text: 'Approved rates turn into invoices automatically when trips are completed.',
      points: ['Draft → Submitted → Approved contracts with amendments', 'Rate cards per customer and lane', 'Invoice drafts created on trip completion', 'Receipts, credit notes and customer statements'],
    },
    {
      icon: 'shield',
      title: 'Fleet maintenance',
      text: 'Keep vehicles safe and on schedule, with costs under control.',
      points: ['Job orders with tiered approval limits', 'Service plans by days, km or engine hours', 'Defect tracking', 'Critical defects block a vehicle from dispatch'],
    },
    {
      icon: 'chart',
      title: 'Weighbridge & reporting',
      text: 'Weight tickets for every stop, and reports for every team.',
      points: ['Gross, tare and net weight tickets', 'KPI dashboard and on-time performance', 'Utilisation and profitability reports', 'CSV export and branded A4 printouts'],
    },
  ],

  process: [
    { title: 'Discover', text: 'We review your fleet, lanes, customers and how dispatch and billing work today.' },
    { title: 'Configure', text: 'Fleet Track is set up with your branding, modules, roles, rate cards and fleet data.' },
    { title: 'Train', text: 'Dispatchers, gatekeepers, finance and maintenance teams are trained on their roles.' },
    { title: 'Go live & support', text: 'A supported go-live, then ongoing support and improvements.' },
  ],

  tools: [
    { name: 'React', logo: 'react' },
    { name: 'Node.js', logo: 'nodejs' },
    { name: 'MongoDB', logo: 'mongodb' },
    { name: 'Secure role-based access', icon: 'shield' },
  ],

  industries: [
    { title: 'Trucking companies', text: 'Fleets of trucks and trailers running scheduled and on-demand journeys.' },
    { title: 'Logistics & distribution', text: 'Multi-stop deliveries with customer-specific rates and billing.' },
    { title: 'Bulk & weighbridge operations', text: 'Loads weighed at the gate, with gross, tare and net tickets.' },
    { title: 'Construction haulage', text: 'Materials moved between sites, quarries and plants.' },
  ],

  engagements: [
    { kind: 'New setup', title: 'Fleet Track rollout', text: 'Setup for your fleet and customers, data migration, training and go-live.', best: 'Best for a new system' },
    { kind: 'Ongoing', title: 'Support & improvement', text: 'Help for your teams, updates and new features as your operation grows.', best: 'Best once you’re live' },
  ],

  faqs: [
    { q: 'What is Fleet Track?', a: 'A management system for transport operators that covers booking and dispatch, live trip tracking, contracts and pricing, billing, fleet maintenance, weighbridge and reporting in one system.' },
    { q: 'Who uses it?', a: 'Dispatchers, gatekeepers, finance, maintenance and management, each with their own role. There are eight roles, from Administrator to a read-only Viewer, and permissions are enforced on the server.' },
    { q: 'How does it prevent double-booking?', a: 'Journeys are checked for conflicts with trucks, trailers and drivers, first in the browser and again on the server. Bookings are saved one at a time, so two dispatchers saving at the same moment can’t book the same truck.' },
    { q: 'Can we turn modules on or off?', a: 'Yes. Modules can be switched on or off, and the system carries your company branding on screens and printouts.' },
    { q: 'Is our data safe?', a: 'Passwords are encrypted, sessions can be revoked, repeated failed sign-ins are locked out, uploaded files are checked, and every action is recorded in an audit trail. Full backups can be exported and restored.' },
    { q: 'Can we see a demo?', a: 'Yes — book a demo using the form below and we’ll walk you through it.' },
  ],
}
