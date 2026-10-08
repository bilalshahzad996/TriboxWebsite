import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppRoutes } from './App.jsx'
import { aboutPage } from './data/about'
import { careersPage } from './data/careers'
import { servicePages } from './data/servicePages'
import { productPages } from './data/productPages'
import { company } from './data/site'

const SITE = 'https://tribox365.com'

// Used at build time by scripts/prerender.js to turn each page into static HTML.
export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  )
}

// Title, description, address and structured data (JSON-LD) for a service page
function serviceHead(p) {
  const url = SITE + p.path
  return {
    title: p.meta.title,
    description: p.meta.description,
    url,
    jsonLd: [
      // Products are described as software; services as a service Tribox provides
      p.product
        ? {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: p.serviceName,
            applicationCategory: 'BusinessApplication',
            description: p.meta.description,
            url,
            publisher: { '@type': 'Organization', name: company.name, url: `${SITE}/` },
          }
        : {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: p.serviceName,
            serviceType: p.serviceType ?? 'ERP implementation',
            description: p.meta.description,
            url,
            provider: { '@type': 'Organization', name: company.name, url: `${SITE}/` },
          },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: p.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }
}

// Every page the build writes out. `head` overrides the title, description and address
// from index.html, and adds structured data for search engines.
export const pages = [
  { url: '/', file: 'index.html' },
  // e.g. /services/odoo/ -> services/odoo/index.html
  ...[...servicePages, ...productPages].map((p) => ({ url: p.path, file: `${p.path.slice(1)}index.html`, head: serviceHead(p) })),
  {
    url: aboutPage.path,
    file: 'about/index.html',
    head: {
      title: aboutPage.meta.title,
      description: aboutPage.meta.description,
      url: SITE + aboutPage.path,
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          url: SITE + aboutPage.path,
          mainEntity: {
            '@type': 'Organization',
            name: company.name,
            legalName: company.legalName,
            url: `${SITE}/`,
            founder: aboutPage.leadership.people.map((p) => ({ '@type': 'Person', name: p.name, jobTitle: p.role, image: SITE + p.photo })),
          },
        },
      ],
    },
  },
  {
    url: careersPage.path,
    file: 'careers/index.html',
    head: { title: careersPage.meta.title, description: careersPage.meta.description, url: SITE + careersPage.path },
  },
  {
    url: '/privacy-policy/',
    file: 'privacy-policy/index.html',
    head: {
      title: `Privacy Policy — ${company.name}`,
      description: `How ${company.legalName} collects, uses and protects personal information shared through this website, by email and in job applications.`,
      url: `${SITE}/privacy-policy/`,
    },
  },
  // Hosts serve this for unknown addresses, with a real 404 status
  { url: '/404', file: '404.html', head: { title: `Page not found — ${company.name}`, noindex: true } },
]
