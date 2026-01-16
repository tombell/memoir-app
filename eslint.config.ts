import js from "@eslint/js";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig(
  {
    ignores: ["dist", "**/matchers.d.ts"],
  },

  js.configs.recommended,

  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,

  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],

  prettierRecommended,

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
        version: "19",
      },
    },

    rules: {
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
