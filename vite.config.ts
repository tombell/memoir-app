import preactPlugin from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    root: "src",
    envDir: "..",
    plugins: [preactPlugin(), tailwindcss()],
    resolve: {
      alias: {
        "~": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      outDir: "../dist",
      emptyOutDir: true,
    },
  };
});
