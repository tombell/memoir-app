import preact from "@preact/preset-vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => ({
  plugins: [tsconfigPaths(), preact()],
  test: {
    environment: "happy-dom",
    coverage: {
      exclude: [
        "*.config.js",
        "*.config.ts",
        "**/*.d.ts",
        ".storybook",
        "test/**/*",
      ],
    },
  },
}));
