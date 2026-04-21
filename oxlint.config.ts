import { defineConfig } from "oxlint";

export default defineConfig({
  plugins: ["eslint", "typescript", "react", "import", "unicorn", "oxc"],
  categories: {
    correctness: "warn",
    suspicious: "warn",
    perf: "warn",
  },
  env: {
    builtin: true,
    browser: true,
    es2020: true,
  },
  ignorePatterns: ["dist/**", "**/matchers.d.ts"],
  rules: {
    "typescript/consistent-type-imports": "error",
    "react/react-in-jsx-scope": "off",
  },
});
