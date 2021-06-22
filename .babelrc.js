module.exports = {
  plugins: [
    ["@babel/plugin-proposal-private-property-in-object", { loose: true }],
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
