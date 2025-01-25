import type { Decorator, Parameters } from "@storybook/preact";

import "../src/index.css";

export const parameters: Parameters = {};

export const decorators: Decorator[] = [
  (story) => {
    document.body.classList.add("font-sans", "bg-gray-900");
    return story();
  },
];
