module.exports = {
  plugins: [
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
