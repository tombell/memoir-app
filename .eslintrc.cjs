module.exports = {
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/jsx-runtime",
    "plugin:storybook/recommended",
    "plugin:vitest/recommended",
    "prettier",
  ],
  parserOptions: {
    project: ["./tsconfig.json", "./tsconfig.node.json"],
  },
  settings: {
    react: {
      version: "18",
    },
  },
  rules: {
    "import/extensions": "off",
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsFor: ["signal"] },
    ],
    "react/no-unknown-property": [
      "error",
      {
        ignore: ["class"],
      },
    ],
    "react/require-default-props": "off",
  },
  overrides: [
    {
      files: ["**/*.test.*"],
      rules: {
        "react/jsx-props-no-spreading": "off",
      },
    },
  ],
};
