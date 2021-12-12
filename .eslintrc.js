module.exports = {
  extends: ["airbnb", "airbnb-typescript", "airbnb/hooks", "prettier"],
  plugins: ["import"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  env: {
    browser: true,
  },
  settings: {
    react: {
      pragma: "h",
      version: "17",
    },
    "import/internal-regex": "^components|hooks|pages|services/",
  },
  rules: {
    "import/extensions": "off",
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
          caseInsensitive: false,
        },
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "preact/hooks",
            group: "external",
          },
          {
            pattern: "pages/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "components/atoms/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "components/molecules/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "components/organisms/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "components/*",
            group: "internal",
            position: "after",
          },
          {
            pattern: "hooks/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "services/**",
            group: "internal",
            position: "after",
          },
        ],
      },
    ],
    "react/function-component-definition": "off",
    "react/no-unknown-property": ["error", { ignore: ["class"] }],
    "react/require-default-props": "off",
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.stories.*"],
      rules: {
        "react/jsx-props-no-spreading": "off",
      },
    },
  ],
  globals: {
    MEMOIR_ADMIN_ENABLED: "readonly",
    MEMOIR_API_KEY: "readonly",
    MEMOIR_API_URL: "readonly",
    MEMOIR_CDN_URL: "readonly",
  },
};
