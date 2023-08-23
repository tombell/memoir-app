import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config = {
  viteFinal: (cfg: any) => mergeConfig(cfg, { plugins: [tsconfigPaths()] }),
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["./public", "../public"],
  addons: [
    "@storybook/addon-controls",
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
    "@storybook/addon-measure",
    "@storybook/addon-outline",
    "@storybook/addon-viewport",
  ],
  framework: {
    name: "@storybook/preact-vite",
  },
  core: {
    disableTelemetry: true,
  },
};

export default config;
