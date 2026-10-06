# Tribox website

The one-page website for [Tribox](https://tribox365.com/), built with React and Vite.

## Run it locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev       # development server at http://localhost:5173
```

## Edit the content

Almost all text lives in [`src/data/site.js`](src/data/site.js): company details, headline words, services, highlights, clients and process steps. Change it there and every section updates.

| What | Where |
| --- | --- |
| Client logos | `public/logos/clients/` (then list them in `clients` in `site.js`) |
| Colours, fonts, spacing | Variables at the top of [`src/index.css`](src/index.css) |
| Page title, SEO and social-share tags | [`index.html`](index.html) |
| Social share image (1200×630) | `public/og-image.png` |

## Contact form

The form sends enquiries through a form service configured in a `.env` file:

1. Copy `.env.example` to `.env`.
2. Fill in `VITE_CONTACT_ENDPOINT` (and `VITE_CONTACT_ACCESS_KEY` for Web3Forms). Both options are explained in the file.
3. Rebuild with `npm run build`.

Without an endpoint, the form opens the visitor's email app, addressed to `sales@tribox365.com`.

## Build and deploy

```bash
npm run build     # production files go to dist/
npm run preview   # check the production build locally
```

The build prerenders each page to static HTML (`scripts/prerender.js`), so search engines and link previews see the full content without running JavaScript. It writes `dist/index.html` for the home page and `dist/404.html` for unknown addresses. A new page needs a `<Route>` in `src/App.jsx` and a line in `scripts/prerender.js`. Components must not read `window` or `document` while rendering, only inside effects, because the prerender runs in Node.

Upload the **contents** of `dist/` to your host. Each host serves `404.html` with a real 404 status for unknown addresses:

- **cPanel / Apache** (for example `public_html`): `dist/.htaccess` adds the HTTPS redirect and sends `www.` to the address without www, plus security headers, caching, compression and the 404 page.
- **Netlify**: `dist/_redirects` is picked up automatically.
- **Vercel**: `vercel.json` is picked up automatically.
- **Azure Static Web Apps**: `staticwebapp.config.json` is picked up automatically.

If the domain changes, update the URLs in `index.html`, `public/robots.txt` and `public/sitemap.xml`.

## Checks

```bash
npm run lint
```
