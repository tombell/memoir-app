import { build } from "bun";
import plugin from "bun-plugin-tailwind";

await build({
  target: "browser",
  entrypoints: ["src/index.html"],
  outdir: "dist",
  plugins: [plugin],
  env: "inline",
  minify: true,
});
