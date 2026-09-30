import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Footer copyright year in the prerendered page
    'import.meta.env.BUILD_YEAR': JSON.stringify(new Date().getFullYear()),
  },
})
