const { mergeConfig } = require("vite");
const { default: tsconfigPaths } = require("vite-tsconfig-paths");

module.exports = {
  viteFinal: (config) => mergeConfig(config, { plugins: [tsconfigPaths()] }),
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["./public", "../public"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/preact-vite",
  },
};
