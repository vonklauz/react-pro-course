import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["lib/index.ts", "lib/math.ts", "lib/string.ts"],
  bundle: true,
  format: "cjs",
  outdir: "dist/lib",
  external: ["react", "react-dom"],
  minify: true,
  sourcemap: true,
  entryNames: "[name]",
  chunkNames: "chunks/[name]-[hash]",
});
