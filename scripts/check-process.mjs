console.log("before import, process.stdin.off:", typeof process.stdin.off);
const s = await import("../dist/server/index.js");
console.log("imported server, default keys:", Object.keys(s));
console.log("after import, process.stdin.off:", typeof process.stdin.off);
