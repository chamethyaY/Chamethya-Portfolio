import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Vercel deployment: SPA mode, no base path needed, no prerender
export default defineConfig({
  vite: {
    build: {
      sourcemap: true,
    },
  },
  tanstackStart: {
    spa: { enabled: true },
    prerender: { enabled: false },
  },
});
