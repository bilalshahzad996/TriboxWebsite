// Content for the Enterprise AI Foundations service page (/services/enterprise-ai/), laid out by
// components/ServicePage.jsx. `stack` and `lists` are drawn by the Stack and Lists sections there.

export const enterpriseAiPage = {
  path: '/services/enterprise-ai/',
  // Name and type of the service in search engines' structured data
  serviceName: 'Enterprise AI foundations on Microsoft Azure',
  serviceType: 'AI advisory and enablement',
  // Contact form: shown in "What do you need help with?"; enquiries are labelled with `topic`
  enquiry: {
    topic: 'Enterprise AI',
    options: [
      'AI readiness assessment',
      'Enterprise architecture assessment',
      'Cloud & application modernisation',
      'Azure AI platform architecture',
      'Copilot & AI agent development',
      'AI governance & responsible AI',
      'Something else',
    ],
  },
  meta: {
    title: 'Enterprise AI Foundations on Microsoft Azure — Tribox',
    description:
      'Tribox builds the foundation for enterprise AI: business strategy, enterprise architecture, an Azure foundation and AI readiness, with advisory and Azure AI enablement services.',
  },

  hero: {
    label: 'Enterprise AI Foundations',
    title: 'Building the foundation',
    accent: 'for enterprise AI',
    text: 'We treat AI transformation as what it really is: an enterprise architecture initiative that aligns business strategy, Azure platform, data, security and governance into one coherent target state.',
    primary: 'Book a free consultation',
    secondary: 'See the AI foundations stack',
    secondaryHref: '#stack',
    modules: ['Business strategy', 'Enterprise architecture', 'Azure foundation', 'AI readiness', 'Copilot & AI agents', 'RAG solutions', 'AI governance', 'MLOps / LLMOps'],
  },

  // Box beside the hero headline
  panel: { logo: 'azure', title: 'Built on Microsoft Azure', subtitle: 'Data, AI, identity & governance as one platform' },

  headings: {
    faqPrompt: 'Still have a question about enterprise AI?',
  },

  // "The AI Foundations Stack": four interlocking layers, built top-down and governed bottom-up
  stack: {
    label: 'Framework',
    title: 'The AI',
    accent: 'foundations stack',
    intro: 'Four interlocking layers, built top-down and governed bottom-up. Every AI initiative sits on all four.',
    layers: [
      { tag: 'Strategy', title: 'Business strategy', lead: 'Identify capabilities & AI opportunities', details: ['Capability mapping', 'Value-stream discovery', 'AI opportunity assessment', 'Prioritized roadmap'] },
      { tag: 'Application', title: 'Enterprise architecture', lead: 'Assess current state → define target state', details: ['Reference architectures', 'Application modernization', 'Integration landscape', 'EA governance'] },
      { tag: 'Platform', title: 'Azure foundation', lead: 'Zones, identity, policy, compliance', details: ['Azure landing zones', 'Networking', 'Identity & access', 'Policy & compliance', 'Cost governance'] },
      { tag: 'Intelligence', title: 'AI readiness', lead: 'Data, apps & operations: AI-ready', details: ['Data foundation', 'AI governance', 'Responsible AI', 'MLOps / LLMOps', 'Skills & operating model'] },
    ],
  },

  // Two numbered lists side by side
  lists: {
    label: 'Services',
    title: 'What we',
    accent: 'deliver',
    panels: [
      {
        title: 'Core advisory services',
        items: [
          'Enterprise Architecture Assessment',
          'Current vs. Target State',
          'Cloud & Application Modernization',
          'Data & Integration Architecture',
          'Security & Governance by Design',
          'AI Readiness Assessment',
          'Technology Roadmaps & Executive Advisory',
        ],
        note: 'Delivered via Azure Migrate & Azure Arc',
      },
      {
        title: 'Azure AI enablement',
        items: [
          'Enterprise AI Strategy & Roadmaps',
          'Azure AI Platform Architecture',
          'Copilot & AI Agent Development',
          'RAG Solutions',
          'AI Governance & Responsible AI',
          'MLOps / LLMOps & AI Operations',
          'AI Performance, Security & Cost Optimization',
        ],
        note: 'Powered by Microsoft Copilot & Azure AI Foundry',
      },
    ],
  },

  faqs: [
    {
      q: 'Where does an enterprise AI initiative start?',
      a: 'With business strategy: identifying the capabilities and AI opportunities that matter, then prioritising a roadmap. Architecture, the Azure foundation and AI readiness build on that.',
    },
    {
      q: 'Why treat AI as an architecture initiative?',
      a: 'AI only works when business strategy, platform, data, security and governance line up. Treating it as an enterprise architecture initiative gives you one coherent target state instead of scattered pilots.',
    },
    {
      q: 'Can you build the AI solutions as well as advise?',
      a: 'Yes. Beyond advisory, our Azure AI enablement covers Copilot and AI agent development, RAG solutions, AI governance and responsible AI, and MLOps / LLMOps and AI operations.',
    },
  ],
}
