import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    tanstackStart({
      prerender: {
        enabled: true, // Forces TanStack to generate physical HTML files
        crawlLinks: true // Automatically finds all your sub-routes
      }
    }),
    viteReact(),
  ],
  base: '/Chamethya-Portfolio/', // Tells Vite your site sits in a sub-folder repo path
})
