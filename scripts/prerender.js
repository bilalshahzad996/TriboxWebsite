// Runs after `vite build`: renders each page to static HTML so search engines and link
// previews see the full content without running JavaScript. The browser then attaches
// React to that HTML (see src/main.jsx). The list of pages lives in src/entry-server.jsx.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const dist = `${root}dist/`
const ssr = `${root}dist-ssr/`

const { render, pages } = await import(pathToFileURL(`${ssr}entry-server.js`).href)
const template = readFileSync(`${dist}index.html`, 'utf8')

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// Swaps a tag in index.html's <head>, and fails the build if the tag is missing
function swap(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`prerender: ${pattern} not found in index.html`)
  return html.replace(pattern, () => replacement)
}

function applyHead(html, head) {
  if (head.title) {
    const title = escape(head.title)
    html = swap(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`)
    html = swap(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`)
    html = swap(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`)
  }
  if (head.description) {
    const description = escape(head.description)
    html = swap(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`)
    html = swap(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`)
    html = swap(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`)
  }
  if (head.url) {
    html = swap(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${escape(head.url)}" />`)
    html = swap(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${escape(head.url)}" />`)
  }
  if (head.noindex) {
    html = swap(html, /<meta name="robots" content="[^"]*" \/>/, '<meta name="robots" content="noindex" />')
    html = swap(html, /\s*<link rel="canonical"[^>]*>/, '')
  }
  for (const data of head.jsonLd ?? []) {
    // "<" is escaped so the data can never close the script tag
    const json = JSON.stringify(data).replace(/</g, '\\u003c')
    html = swap(html, /<\/head>/, `    <script type="application/ld+json">${json}</script>\n  </head>`)
  }
  return html
}

// Replaces the startup screen between <!--app--> and <!--/app--> in index.html
function build({ url, head }) {
  let html = swap(template, /<!--app-->[\s\S]*<!--\/app-->/, render(url))
  html = html.replace('<div id="root">', '<div id="root" data-prerendered>')
  return head ? applyHead(html, head) : html
}

for (const p of pages) {
  const file = `${dist}${p.file}`
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, build(p))
}

rmSync(ssr, { recursive: true, force: true })
console.log(`Prerendered: ${pages.map((p) => p.file).join(', ')}`)
