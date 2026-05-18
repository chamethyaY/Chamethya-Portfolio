import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Vercel deployment: SPA mode, no base path needed, no prerender
export default defineConfig({
  vite: {
    plugins: [
      {
        name: "create-server-shim",
        async writeBundle() {
          const fs = await import("fs");
          const path = await import("path");
          const root = path.resolve();
          const manifestPath = path.join(root, "dist", "server", ".vite", "manifest.json");
          let serverAsset: string | undefined;

          try {
            if (fs.existsSync(manifestPath)) {
              const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
              for (const key in manifest) {
                if (key.includes("server") || manifest[key].file?.includes("server-")) {
                  serverAsset = manifest[key].file || manifest[key];
                  break;
                }
              }
            }
          } catch (e) {
            // ignore
          }

          if (!serverAsset) {
            const assetsDir = path.join(root, "dist", "server", "assets");
            if (fs.existsSync(assetsDir)) {
              const files = fs.readdirSync(assetsDir);
              const match = files.find((f) => f.startsWith("server-") && f.endsWith(".js"));
              if (match) serverAsset = `assets/${match}`;
            }
          }

          // Create a stable server.js shim that forwards to dist/server/index.js
          // so the preview plugin can import a fixed path.
          const shimPath = path.join(root, "dist", "server", "server.js");
          const content = `export { default } from './index.js';\nexport * from './index.js';\n`;
          try {
            fs.writeFileSync(shimPath, content, "utf8");
          } catch (e) {
            // ignore
          }
        },
      },
    ],
    build: {
      outDir: "dist",
      sourcemap: true,
    },
  },
  tanstackStart: {
    spa: { enabled: true },
    prerender: { enabled: false },
  },
});
