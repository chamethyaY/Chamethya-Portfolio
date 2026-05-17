const fs = require("fs");
const { SourceMapConsumer } = require("source-map");

const mapPath = process.argv[2] || "dist/client/assets/index-Lazwzx9s.js.map";
const posArgs = process.argv.slice(3);
if (!fs.existsSync(mapPath)) {
  console.error("Source map not found:", mapPath);
  process.exit(2);
}
const raw = fs.readFileSync(mapPath, "utf8");
const positions = posArgs.length
  ? posArgs.map((p) => {
      const [line, column] = p.split(":").map(Number);
      return { line, column };
    })
  : [
      { line: 9, column: 41327 },
      { line: 11, column: 29700 },
      { line: 11, column: 90469 },
      { line: 11, column: 90505 },
    ];

SourceMapConsumer.with(JSON.parse(raw), null, (consumer) => {
  for (const { line, column } of positions) {
    const orig = consumer.originalPositionFor({ line, column });
    console.log(
      `${line}:${column} -> ${orig.source || "<unknown>"}:${orig.line || 0}:${orig.column || 0} ${orig.name || ""}`,
    );
  }
});
