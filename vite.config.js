import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: process.env.HOST || 'localhost',  // Use 'localhost' for local, '0.0.0.0' for deployment
    port: process.env.PORT || 5173,         // Default port 5173
    strictPort: true,                        // Ensures the same port is used
  }
})
