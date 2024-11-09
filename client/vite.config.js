import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/gifts': 'http://localhost:3001' // Proxy API requests to the Express server
    }
  }
})