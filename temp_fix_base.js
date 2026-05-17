const fs = require("fs");
const p = "dist/client/index.html";
try {
  let c = fs.readFileSync(p, "utf8");
  const old = c;
  c = c.replace(/<base[^>]*\/>/i, '<base href="/Chamethya-Portfolio/"/>');
  if (c === old) {
    console.log("no change");
  } else {
    fs.writeFileSync(p, c, "utf8");
    console.log("patched");
  }
} catch (err) {
  console.error("error", err.message);
  process.exit(1);
}
