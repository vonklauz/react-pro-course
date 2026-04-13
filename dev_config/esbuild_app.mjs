import * as esbuild from "esbuild";

let ctx = await esbuild.context({
  entryPoints: ["app/index.ts"],
  outfile: "out/app.js",
  bundle: true,
});

let { hosts, port } = await ctx.serve({
  servedir: "out",
});

await ctx.watch();

console.log("watching app...");
