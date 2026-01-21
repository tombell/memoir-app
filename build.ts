import { build } from "@tombell/bun-build-stats";
import plugin from "bun-plugin-tailwind";

await build({
  target: "browser",
  entrypoints: ["src/index.html"],
  outdir: "dist",
  publicPath: "/",
  plugins: [plugin],
  env: "inline",
  minify: true,
});
