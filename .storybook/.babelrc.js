module.exports = {
  presets: [
    "@babel/preset-env",
    "preact",
    ["@babel/typescript", { jsxPragma: "h" }],
  ],
  plugins: [
    ["@babel/plugin-proposal-class-properties", { loose: true }],
    ["@babel/plugin-proposal-private-methods", { loose: true }],
    [
      "module-resolver",
      {
        alias: {
          components: "./src/components",
          pages: "./src/pages",
          services: "./src/services",
        },
      },
    ],
  ],
};
