import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig(() => ({
  plugins: [tailwindcss(), preact()],
  resolve: {
    alias: {
      "~": import.meta.resolve(import.meta.dirname, "./src"),
    },
  },
}));
