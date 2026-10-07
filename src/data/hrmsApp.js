// Content for the HRMS App product page (/products/hrms-app/), laid out by
// components/ServicePage.jsx. `icon` names come from components/Icon.jsx, `logo` names from
// components/TechLogo.jsx. Product details should be checked against the actual product.

export const hrmsAppPage = {
  path: '/products/hrms-app/',
  product: true,
  serviceName: 'Tribox HRMS App',
  enquiry: {
    topic: 'HRMS App',
    options: ['Product demo', 'Pricing', 'Moving from our current HR system', 'Integration with our ERP or payroll', 'Support for an existing installation'],
  },
  meta: {
    title: 'HRMS App: Human Resource Management — Tribox',
    description:
      'Tribox HRMS App brings employee records, attendance, leave and HR requests into one system, with self-service for employees and clear reports for HR and managers.',
  },

  hero: {
    label: 'Tribox HRMS App',
    title: 'Human resources, in',
    accent: 'one place',
    text: 'Employee records, attendance, leave and HR requests in one system — with self-service for employees and clear reports for HR and managers.',
    primary: 'Book a demo',
    secondary: 'See the features',
    modules: ['Employee records', 'Attendance', 'Leave', 'Self-service', 'Approvals', 'Documents', 'Payroll inputs', 'Reports', 'User access'],
  },

  panel: { logo: 'hr', title: 'HRMS App', subtitle: 'Human resource management' },

  headings: {
    challenges: { title: 'Where HR work', accent: 'piles up' },
    capabilities: {
      title: 'HRMS',
      accent: 'features',
      intro: 'Everything your HR team needs day to day, with less paperwork for everyone.',
    },
    process: { title: 'How a rollout', accent: 'runs' },
    industries: { title: 'Built for', accent: 'growing teams' },
    faqPrompt: 'Still have a question about the HRMS App?',
  },

  challenges: [
    { tag: 'Scattered records', title: 'Employee files everywhere', text: 'Contracts, IDs and records spread across folders and inboxes are hard to keep current.' },
    { tag: 'Manual requests', title: 'Leave tracked by email', text: 'Requests and approvals by email or paper get lost, and balances drift.' },
    { tag: 'Attendance', title: 'Time records nobody trusts', text: 'Manual attendance makes payroll inputs slow to prepare and easy to dispute.' },
    { tag: 'HR workload', title: 'HR answering the same questions', text: 'Without self-service, HR spends its day on routine requests.' },
  ],

  approach: {
    label: 'How the HRMS works',
    title: 'One system for',
    accent: 'HR and employees',
    lead: 'HRMS App keeps employee records, attendance, leave and requests in one place — with self-service so employees can help themselves and approvals that reach the right manager.',
    text: 'We set it up for your policies, move your employee data across, train your team, and support it after go-live.',
    delivers: ['HRMS App setup', 'Policy configuration', 'Employee data migration', 'Self-service setup', 'Approval workflows', 'Reports', 'HR team training', 'Ongoing support'],
  },

  capabilities: [
    {
      icon: 'users',
      title: 'Employee records',
      text: 'Every employee’s details and documents in one secure place.',
      points: ['Personal and job details', 'Documents and contracts', 'Expiry reminders for documents', 'Organisation structure'],
    },
    {
      icon: 'clock',
      title: 'Attendance',
      text: 'A reliable record of who worked when.',
      points: ['Daily attendance records', 'Shifts and working hours', 'Lateness and absence', 'Inputs for payroll'],
    },
    {
      icon: 'check',
      title: 'Leave',
      text: 'Leave requests, approvals and balances without the email chains.',
      points: ['Leave types for your policies', 'Requests and approvals', 'Balances always up to date', 'Team leave calendar'],
    },
    {
      icon: 'globe',
      title: 'Employee self-service',
      text: 'Employees view their information and submit requests themselves.',
      points: ['View their own details', 'Request leave', 'Submit HR requests', 'Track request status'],
    },
    {
      icon: 'invoice',
      title: 'Payroll inputs',
      text: 'Attendance and leave ready for payroll, without re-keying.',
      points: ['Attendance and leave summaries', 'Adjustments in one place', 'Export for payroll', 'Integration with your ERP'],
    },
    {
      icon: 'chart',
      title: 'Reports',
      text: 'Clear HR reports for managers and leadership.',
      points: ['Headcount and turnover', 'Attendance and leave reports', 'Document expiry reports', 'Role-based access'],
    },
  ],

  process: [
    { title: 'Discover', text: 'We review your HR policies, processes and employee data.' },
    { title: 'Configure', text: 'HRMS App is set up for your policies and your employee data is moved across.' },
    { title: 'Test & train', text: 'We test with your HR team and train managers and employees.' },
    { title: 'Go live & support', text: 'A supported go-live, then ongoing support and updates.' },
  ],

  industries: [
    { title: 'Growing companies', text: 'Teams moving HR off spreadsheets as headcount grows.' },
    { title: 'Retail & hospitality', text: 'Shift-based teams across stores and sites.' },
    { title: 'Professional services', text: 'Office teams with structured leave and approvals.' },
    { title: 'Multi-site businesses', text: 'Employees across locations, managed centrally.' },
  ],

  engagements: [
    { kind: 'New setup', title: 'HRMS rollout', text: 'Setup for your policies, data migration, training and go-live.', best: 'Best for a new HR system' },
    { kind: 'Ongoing', title: 'Support & updates', text: 'Help for your HR team, updates and new features after go-live.', best: 'Best once you’re live' },
  ],

  faqs: [
    { q: 'What does the HRMS App cover?', a: 'Employee records, attendance, leave, HR requests and approvals, with self-service for employees and reports for HR and managers.' },
    { q: 'Can it follow our HR policies?', a: 'Yes. Leave types, working hours and approval steps are set up to match your policies.' },
    { q: 'Can employees use it themselves?', a: 'Yes. Employees can view their details, request leave and submit HR requests through self-service.' },
    { q: 'Does it handle payroll?', a: 'It prepares attendance and leave inputs for payroll and can connect to your ERP or payroll system. We confirm the payroll setup with you during discovery.' },
    { q: 'Can you move our existing employee data?', a: 'Yes. We migrate employee records from spreadsheets or your current system as part of the rollout.' },
    { q: 'Can we see a demo?', a: 'Yes — book a demo using the form below and we’ll walk you through it.' },
  ],
}
