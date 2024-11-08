import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // Adding React plugin for Vite
  base: "hari-portfolio-2", // Base path for deployment (used for GitHub Pages)
  build: {
    rollupOptions: {
      external: ['react-router-dom'] // Excluding 'react-router-dom' from the bundle
    }
  }
})

