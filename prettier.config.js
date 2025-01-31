export default {
  plugins: [
    "prettier-plugin-tailwindcss",
    "@trivago/prettier-plugin-sort-imports",
  ],
  importOrder: [
    "^(bun|node):(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^~/layouts/(.*)$",
    "^~/pages/(.*)$",
    "^~/components/(.*)$",
    "^~/services/(.*)$",
    "^~/stores/(.*)$",
    "^~/tests/(.*)$",
    "^~/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
