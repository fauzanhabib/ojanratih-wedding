// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or vue()

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  }
})
