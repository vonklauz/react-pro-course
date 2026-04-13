import * as esbuild from "esbuild";

let ctx = await esbuild.context({
  entryPoints: ["lib/index.ts", "lib/math.ts", "lib/string.ts"],
  outdir: "out/lib",
  bundle: true,
});

let { hosts, port } = await ctx.serve({
  servedir: "out",
});

await ctx.watch();

console.log("watching lib...");
