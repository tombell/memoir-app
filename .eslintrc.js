module.exports = {
  extends: ["airbnb-typescript", "prettier"],
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
