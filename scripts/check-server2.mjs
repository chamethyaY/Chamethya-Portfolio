import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

const assetsDir = path.resolve("dist", "server", "assets");
if (!fs.existsSync(assetsDir)) {
  console.error("assetsDir not found:", assetsDir);
  process.exit(1);
}
const files = fs.readdirSync(assetsDir);
const serverFile = files.find((f) => f.startsWith("server-") && f.endsWith(".js"));
if (!serverFile) {
  console.error("server file not found in", assetsDir);
  process.exit(1);
}
const moduleUrl = pathToFileURL(path.join(assetsDir, serverFile)).toString();
console.log("importing", moduleUrl);

try {
  const mod = await import(moduleUrl);
  console.log("exports:", Object.keys(mod));
  console.log("typeof fetch:", typeof mod.fetch);
  console.log("typeof default:", typeof mod.default);
} catch (e) {
  console.error("import error:", e);
  process.exit(1);
}
