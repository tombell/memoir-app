const { mergeConfig } = require("vite");
const { default: tsconfigPaths } = require("vite-tsconfig-paths");

module.exports = {
  viteFinal: (config) => mergeConfig(config, { plugins: [tsconfigPaths()] }),
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-mock/register",
  ],
  framework: "@storybook/preact",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
};
