module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-postcss",
  ],
  babel: (options) => ({
    ...options,
    presets: [["@babel/typescript", { jsxPragma: "h" }]],
  }),
};
