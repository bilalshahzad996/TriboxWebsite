// Runs after `vite build`: renders each page to static HTML so search engines and link
// previews see the full content without running JavaScript. The browser then attaches
// React to that HTML (see src/main.jsx).
import { readFileSync, rmSync, writeFileSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const dist = `${root}dist/`
const ssr = `${root}dist-ssr/`

const { render } = await import(pathToFileURL(`${ssr}entry-server.js`).href)
const template = readFileSync(`${dist}index.html`, 'utf8')

// Replaces the startup screen between <!--app--> and <!--/app--> in index.html
function page(url, head = (html) => html) {
  const html = template
    .replace(/<!--app-->[\s\S]*<!--\/app-->/, () => render(url))
    .replace('<div id="root">', '<div id="root" data-prerendered>')
  if (html === template) throw new Error('prerender: <!--app--> markers not found in index.html')
  return head(html)
}

writeFileSync(`${dist}index.html`, page('/'))

// Hosts serve this for unknown addresses, with a real 404 status
writeFileSync(
  `${dist}404.html`,
  page('/404', (html) =>
    html
      .replace(/<title>[^<]*<\/title>/, '<title>Page not found — Tribox</title>')
      .replace('<meta name="robots" content="index, follow" />', '<meta name="robots" content="noindex" />')
      .replace(/\s*<link rel="canonical"[^>]*>/, ''),
  ),
)

// Pages to add when they come back: '/privacy-policy'

rmSync(ssr, { recursive: true, force: true })
console.log('Prerendered: index.html, 404.html')
