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
  },
  rules: {
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
            pattern: "components/atoms/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "components/molecules/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "components/organisms/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "components/layouts/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "hooks/**",
            group: "external",
            position: "after",
          },
          {
            pattern: "services/**",
            group: "external",
            position: "after",
          },
        ],
      },
    ],
    "react/no-unknown-property": ["error", { ignore: ["class"] }],
    "react/prop-types": "off",
    "react/require-default-props": "off",
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
    NodeJS: "readonly",
  },
};
