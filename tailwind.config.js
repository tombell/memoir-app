module.exports = {
  purge: {
    enabled: true,
    safelist: ["italic", "font-bold", "text-indigo-500"],
    content: ["./public/index.html", "./src/**/*.tsx"],
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
