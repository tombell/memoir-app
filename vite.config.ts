import { resolve } from "node:path";

import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig(() => ({
  plugins: [tailwindcss(), preact()],
  resolve: {
    alias: {
      $: resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "happy-dom",
    coverage: {
      exclude: [
        "*.config.js",
        "*.config.ts",
        "**/*.d.ts",
        ".storybook",
        "src/test/**/*",
      ],
    },
  },
}));
