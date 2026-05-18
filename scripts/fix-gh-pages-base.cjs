const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const indexPath = path.join(root, "dist", "client", "index.html");
const shellPath = path.join(root, "dist", "client", "_shell.html");

try {
  let htmlPath = indexPath;
  if (!fs.existsSync(htmlPath) && fs.existsSync(shellPath)) htmlPath = shellPath;
  let html = fs.readFileSync(htmlPath, "utf8");

  html = html.replace(/(href=")\/assets\//g, `$1/Chamethya-Portfolio/assets/`);
  html = html.replace(/(href=')\/assets\//g, `$1/Chamethya-Portfolio/assets/`);
  html = html.replace(/(import\(")\/assets\//g, `$1/Chamethya-Portfolio/assets/`);
  html = html.replace(/(import\('\/)assets\//g, `$1/Chamethya-Portfolio/assets/`);
  html = html.replace(/(src=")\/assets\//g, `$1/Chamethya-Portfolio/assets/`);

  if (!/\<base href=/.test(html)) {
    html = html.replace("<head>", '<head>\n  <base href="/Chamethya-Portfolio/">');
  }

  fs.writeFileSync(indexPath, html, "utf8");
  // If we patched the shell file, also ensure index.html exists for GH Pages
  if (htmlPath === shellPath) {
    try {
      fs.writeFileSync(shellPath, html, "utf8");
    } catch (e) {
      // ignore
    }
  }
  console.log("Patched index.html asset paths for GitHub Pages.");
} catch (err) {
  console.error("Could not patch index.html:", err.message);
  process.exitCode = 0;
}
