import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["app/index.ts"],
  bundle: true,
  splitting: true,
  format: "esm",
  outdir: "dist",
  minify: true,
  sourcemap: true,
  entryNames: "[name]",
  chunkNames: "chunks/[name]-[hash]",
});
