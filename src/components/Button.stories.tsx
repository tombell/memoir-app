import type { Meta } from "@storybook/preact";

import Button from "$/components/Button";

const meta: Meta = {
  component: Button,
  argTypes: {
    variant: {
      options: ["large", "medium", "small"],
      control: { type: "radio" },
    },
    onClick: { action: "clicked" },
  },
};
export default meta;

export const Large = {
  args: {
    text: "Large Button",
  },
};

export const Medium = {
  args: {
    text: "Medium Button",
    variant: "medium",
  },
};

export const Small = {
  args: {
    text: "Small Button",
    variant: "small",
  },
};
