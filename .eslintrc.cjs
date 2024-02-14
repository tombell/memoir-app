module.exports = {
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "prettier",
    "plugin:react/jsx-runtime",
    "plugin:storybook/recommended",
    "plugin:vitest/recommended",
  ],
  parserOptions: {
    project: ["./tsconfig.json", "./tsconfig.node.json"],
  },
  rules: {
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
      files: ["**/*.test.*"],
      rules: {
        "react/jsx-props-no-spreading": "off",
      },
    },
  ],
};
