import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Let the dev server answer requests that come through an ngrok tunnel (see index.js)
  server: { allowedHosts: ['.ngrok-free.dev'] },
  define: {
    // Footer copyright year in the prerendered page
    'import.meta.env.BUILD_YEAR': JSON.stringify(new Date().getFullYear()),
  },
})
