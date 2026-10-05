// Content for the Careers page (/careers/). `icon` names come from components/Icon.jsx.
import { company } from './site'

export const careersPage = {
  path: '/careers/',
  // Where applications go. Change this to a dedicated careers address if you have one.
  email: company.email,
  meta: {
    title: 'Careers at Tribox — Join Our Team',
    description:
      'Build your career at Tribox: work on Microsoft Dynamics 365, Odoo, and web and mobile projects with our teams in Dubai and Lahore. See open roles and how to apply.',
  },

  hero: {
    label: 'Careers',
    title: 'Build what’s next with',
    accent: 'Tribox',
    text: 'We’re consultants and developers delivering Microsoft Dynamics 365, Odoo, and web and mobile solutions for growing businesses. If you enjoy solving real business problems with technology, we’d like to hear from you.',
    primary: 'See open roles',
    secondary: 'Send your CV',
  },

  why: [
    { icon: 'users', title: 'Work in a tribe', text: 'Join a dedicated team aligned with one client, and see your work go live in their business.' },
    { icon: 'globe', title: 'Real business problems', text: 'From ERP rollouts to mobile apps, you work on projects that change how companies run.' },
    { icon: 'code', title: 'Keep learning', text: 'Grow your skills across Dynamics 365, Odoo, the Power Platform and modern web development.' },
    { icon: 'feedback', title: 'Feedback culture', text: 'We listen, iterate and improve — with our clients and with each other.' },
  ],

  // Kinds of work we hire for (not open roles — those are in `openings` below)
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

  // Open roles. While this list is empty the page invites general applications instead.
  // Example:
  // { title: 'Business Central Developer', team: 'ERP developers', location: 'Lahore', type: 'Full-time',
  //   summary: 'Build AL extensions and integrations for Business Central customers.' },
  openings: [],
}
