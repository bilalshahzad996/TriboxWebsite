// Tiny static server for Azure App Service (Linux, Node). It serves this folder, and maps a
// folder address such as /about/ or /about to its index.html, which the default server cannot do
// (that is the "EISDIR" error). Set the App Service Startup Command to:  node server.cjs
const http = require('node:http')
const fs = require('node:fs')
const path = require('node:path')

const root = __dirname
const port = process.env.PORT || 8080
const types = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
}

function send(res, file, status = 200) {
  const ext = path.extname(file)
  const headers = { 'Content-Type': types[ext] || 'application/octet-stream', 'X-Content-Type-Options': 'nosniff' }
  if (file.includes(`${path.sep}assets${path.sep}`)) headers['Cache-Control'] = 'public, max-age=31536000, immutable'
  res.writeHead(status, headers)
  fs.createReadStream(file).pipe(res)
}

http.createServer((req, res) => {
  let pathname
  try { pathname = decodeURIComponent(new URL(req.url, 'http://x').pathname) } catch { pathname = '/' }
  const file = path.join(root, path.normalize(pathname))
  if (!file.startsWith(root)) { res.writeHead(403); return res.end('Forbidden') }

  fs.stat(file, (err, stat) => {
    if (!err && stat.isFile()) return send(res, file)
    if (!err && stat.isDirectory()) {
      // /about -> /about/ so relative links work, then serve its index.html
      if (!pathname.endsWith('/')) { res.writeHead(301, { Location: `${pathname}/` }); return res.end() }
      const index = path.join(file, 'index.html')
      return fs.existsSync(index) ? send(res, index) : send(res, path.join(root, '404.html'), 404)
    }
    send(res, path.join(root, '404.html'), 404)
  })
}).listen(port, () => console.log(`Serving ${root} on ${port}`))
