import { defineConfig } from "oxfmt";

export default defineConfig({
  ignorePatterns: [],
  sortImports: {
    groups: [
      "builtin",
      ["external", "unknown"],
      ["internal", "parent", "sibling", "index"],
      "style",
      "side_effect",
      "side_effect_style",
    ],
    newlinesBetween: true,
    order: "asc",
  },
  // sortImports: {
  //   customGroups: [
  //     { groupName: "layouts", elementNamePattern: ["~/layouts/**"] },
  //     { groupName: "pages", elementNamePattern: ["~/pages/**"] },
  //     { groupName: "components", elementNamePattern: ["~/components/**"] },
  //     { groupName: "services", elementNamePattern: ["~/services/**"] },
  //     { groupName: "utils", elementNamePattern: ["~/utils/**"] },
  //     { groupName: "tests", elementNamePattern: ["~/tests/**"] },
  //   ],
  //   newlinesBetween: true,
  //   groups: [
  //     "type-import",
  //     ["value-builtin", "value-external"],
  //     "layouts",
  //     "pages",
  //     "components",
  //     "services",
  //     "utils",
  //     "tests",
  //     "type-internal",
  //     "value-internal",
  //     ["type-parent", "type-sibling", "type-index"],
  //     ["value-parent", "value-sibling", "value-index"],
  //     "unknown",
  //   ],
  // },
});
