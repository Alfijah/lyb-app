import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    Sitemap({ 
      hostname: 'https://drinklyb.com/',
      dynamicRoutes: ['/about', '/menu', '/benefits', '/detoxen', '/faq'],
      outDir: 'dist',
      readable: true,
      generateRobotsTxt: true,
    }),
  ],
  build: {
    outDir: 'dist',
  }
})