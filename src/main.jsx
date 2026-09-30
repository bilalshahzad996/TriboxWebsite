import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/inter/wght.css'
import '@fontsource-variable/sora/wght.css'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Built pages already contain the rendered HTML (see scripts/prerender.js): attach to it.
// In development the page only has the startup screen, so render from scratch.
if (root.hasAttribute('data-prerendered')) hydrateRoot(root, app)
else createRoot(root).render(app)
