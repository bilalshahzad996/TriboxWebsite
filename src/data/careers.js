// Content for the Careers page (/careers/). `icon` names come from components/Icon.jsx.

export const careersPage = {
  path: '/careers/',
  // Where applications go
  email: 'hr@tribox365.com',
  meta: {
    title: 'Careers at Tribox — Join Our Team',
    description:
      'Build your career at Tribox: work on Microsoft Dynamics 365, Odoo, and web and mobile projects with our teams in Dubai and Lahore. Send us your CV for any role.',
  },

  hero: {
    label: 'Careers',
    title: 'Build what’s next with',
    accent: 'Tribox',
    text: 'We’re consultants and developers delivering Microsoft Dynamics 365, Odoo, and web and mobile solutions for growing businesses. If you enjoy solving real business problems with technology, we’d like to hear from you.',
    primary: 'Send your CV',
    secondary: 'Teams we hire for',
  },

  why: [
    { icon: 'users', title: 'Work in a tribe', text: 'Join a dedicated team aligned with one client, and see your work go live in their business.' },
    { icon: 'globe', title: 'Real business problems', text: 'From ERP rollouts to mobile apps, you work on projects that change how companies run.' },
    { icon: 'code', title: 'Keep learning', text: 'Grow your skills across Dynamics 365, Odoo, the Power Platform and modern web development.' },
    { icon: 'feedback', title: 'Feedback culture', text: 'We listen, iterate and improve — with our clients and with each other.' },
  ],

  // Kinds of work we hire for
  teams: [
    { title: 'ERP consultants', text: 'Functional consultants for Dynamics 365 Finance & Operations, Business Central, CRM and Odoo.' },
    { title: 'ERP developers', text: 'Developers who extend and integrate ERP systems — AL, X++, Python and Power Platform.' },
    { title: 'Web & mobile developers', text: 'Engineers building websites, web applications and iOS and Android apps.' },
    { title: 'Project & support', text: 'Project managers and support specialists who keep delivery on track after go-live.' },
  ],

  hiring: [
    { title: 'Apply', text: 'Send your CV and a short note about what you’d like to work on.' },
    { title: 'Intro call', text: 'A conversation about your experience, your goals and our teams.' },
    { title: 'Interview', text: 'A technical or case discussion with the people you would work with.' },
    { title: 'Offer', text: 'If it’s a fit on both sides, we agree the details and welcome you aboard.' },
  ],

  // Closing invitation: applications for any role, at any time, by email
  apply: {
    title: 'Send us',
    accent: 'your CV',
    heading: 'Interested in joining Tribox?',
    text: 'We welcome applications for any role, at any time — consulting, development or delivery. Send us your CV and we’ll get in touch when there’s a fit.',
  },
}
