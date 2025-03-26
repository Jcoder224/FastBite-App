import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 5173,
    strictPort: true
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 5173,
    allowedHosts: ['fastbite-app-1.onrender.com', '.onrender.com'] // ✅ Allow Render host
  }
})
