import js from "@eslint/js";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist/*", "src/**/*.d.ts"],
  },

  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    settings: {
      react: {
        pragma: "h",
        version: "18",
      },
    },
  },

  js.configs.recommended,

  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,

  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],

  prettierRecommended,

  {
    rules: {
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
      "react/no-unknown-property": [
        "error",
        {
          ignore: ["class"],
        },
      ],
    },
  },
);
