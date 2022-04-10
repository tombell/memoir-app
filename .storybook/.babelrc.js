module.exports = {
  presets: [
    "@babel/preset-env",
    "preact",
    ["@babel/typescript", { jsxPragma: "h", jsxPragmaFrag: "Fragment" }],
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          components: "./src/components",
          hooks: "./src/hooks",
          pages: "./src/pages",
          services: "./src/services",
        },
      },
    ],
    [
      "@babel/plugin-transform-react-jsx",
      {
        pragma: "h",
        pragmaFrag: "Fragment",
      },
    ],
  ],
};
