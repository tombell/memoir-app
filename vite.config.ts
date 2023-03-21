import preact from "@preact/preset-vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const dev = mode === "development" || mode === "test";

  return {
    plugins: [tsconfigPaths(), preact()],
    define: {
      MEMOIR_ADMIN_ENABLED: `"${dev}"`,
      MEMOIR_API_KEY: dev ? `"${process.env.MEMOIR_API_KEY || ""}"` : '""',
      MEMOIR_API_URL: dev
        ? '"http://localhost:8080"'
        : '"https://api.iamdjriff.co.uk"',
      MEMOIR_CDN_URL: dev
        ? '"https://memoir-artwork-development.s3.amazonaws.com"'
        : '"https://d4vv6ayb6g3d4.cloudfront.net"',
    },
    test: {
      environment: "jsdom",
    },
  };
});
