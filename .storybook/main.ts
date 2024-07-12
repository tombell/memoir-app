import type { StorybookConfig } from "@storybook/preact-vite";
import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  viteFinal: (cfg) => mergeConfig(cfg, { plugins: [tsconfigPaths()] }),
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
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  env: (env) => ({
    ...env,
    VITE_MEMOIR_API_KEY: "asdf-asdf",
    VITE_MEMOIR_API_URL: "http://localhost:8080",
    VITE_MEMOIR_CDN_URL: "",
  }),
};

export default config;
