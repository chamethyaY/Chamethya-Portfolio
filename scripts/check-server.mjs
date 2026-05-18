import serverBuild from "../dist/server/server.js";
console.log("serverBuild default type:", typeof serverBuild);
console.log("serverBuild keys:", Object.keys(serverBuild));
console.log("serverBuild.fetch type:", typeof serverBuild.fetch);

if (serverBuild && typeof serverBuild.fetch === "function") {
  console.log(
    "serverBuild.fetch exists — trying a simple call may require a Request object; skipping actual fetch.",
  );
} else {
  console.error("serverBuild.fetch is missing or not a function");
}
