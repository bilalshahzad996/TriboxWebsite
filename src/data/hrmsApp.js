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
      'Tribox HRMS & Payroll is an ISV solution for Dynamics 365 Finance & Operations and Business Central: core HR, full payroll with GL journals and end of service, self-service and a mobile app for employees.',
  },

  hero: {
    label: 'Tribox HRMS App',
    title: 'Human resources, in',
    accent: 'one place',
    text: 'An ISV solution on Dynamics 365 Finance & Operations and Business Central: core HR, full payroll, employee and manager self-service, and a mobile app for every employee.',
    primary: 'Book a demo',
    secondary: 'See the features',
    modules: ['Core HR', 'Recruitment', 'Time & attendance', 'Leave & OT', 'Payroll', 'GL payroll journals', 'End of service', 'Employee & manager self-service', 'Mobile app', 'Reports'],
  },

  panel: { logo: 'hr', title: 'HRMS & Payroll', subtitle: 'ISV on Dynamics 365 F&O and Business Central' },

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
    lead: 'HRMS & Payroll is an ISV solution that runs on Dynamics 365 Finance & Operations and Business Central. It keeps core HR, payroll and requests in one place, with self-service for employees and managers and a mobile app for every employee.',
    text: 'We set it up for your policies, move your employee data across, train your team, and support it after go-live.',
    delivers: ['HRMS App setup', 'Policy configuration', 'Payroll setup', 'Employee data migration', 'Self-service & mobile app', 'Approval workflows', 'Reports', 'HR team training', 'Ongoing support'],
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
      title: 'Employee & manager self-service',
      text: 'Employees and managers handle their own HR work, on the web or on mobile.',
      points: ['Personal information', 'Leave, overtime and HR requests', 'Payslips and reports', 'Assigned work items and tasks', 'Internal open jobs', 'Performance reviews and course enrolment'],
    },
    {
      icon: 'invoice',
      title: 'Payroll',
      text: 'A full payroll module, from contracts to salary statements and the general ledger.',
      points: ['Position payroll details and employee contracts', 'Benefits and deductions', 'Leave, overtime, loans and claims', 'Salary processing and salary statements', 'GL payroll journals', 'End of service and gratuity'],
    },
    {
      icon: 'users',
      title: 'Recruitment & performance',
      text: 'From the open job to onboarding, goals and reviews.',
      points: ['Jobs and positions', 'Recruitment projects, applicants and applications', 'Employee work history', 'Goals and reviews', 'Courses', 'Onboarding and offboarding'],
    },
    {
      icon: 'chart',
      title: 'Reports',
      text: 'Clear HR and payroll reports for managers and leadership.',
      points: ['Payslip and salary register', 'Payroll comparison', 'Leave and gratuity accruals', 'Complete employee sheet', 'Leave, OT, loan and ticket reports', 'HR letters and NOC', 'GPSSA and end of service'],
    },
    {
      icon: 'mobile',
      title: 'Mobile application',
      text: 'A mobile app is available for all employees as an external app.',
      points: ['Available to every employee', 'Requests and approvals on the go', 'Payslips on the phone', 'Works alongside the web self-service'],
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
    { q: 'What does the HRMS App cover?', a: 'Core HR (jobs and positions, recruitment, work history, goals and reviews, time and attendance, courses, onboarding and offboarding), full payroll, employee and manager self-service, reports, and a mobile app for employees.' },
    { q: 'Which systems does it run on?', a: 'It is an ISV solution built on Microsoft Dynamics 365 Finance & Operations and Business Central, so HR and payroll work from the same data as your ERP. A mobile application is available for all employees as an external app.' },
    { q: 'Can it follow our HR policies?', a: 'Yes. Leave types, working hours and approval steps are set up to match your policies.' },
    { q: 'Can employees use it themselves?', a: 'Yes. Employees can view their details, request leave and submit HR requests through self-service.' },
    { q: 'Does it handle payroll?', a: 'Yes. HRMS includes a full payroll module: position payroll details, employee contracts, benefits and deductions, leave, overtime, loans and claims, salary processing and statements, GL payroll journals and end of service. Reports include the payslip, salary register, payroll comparison, leave and gratuity accruals, and GPSSA and end of service.' },
    { q: 'Can you move our existing employee data?', a: 'Yes. We migrate employee records from spreadsheets or your current system as part of the rollout.' },
    { q: 'Can we see a demo?', a: 'Yes — book a demo using the form below and we’ll walk you through it.' },
  ],
}
