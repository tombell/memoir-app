import { Meta } from "@storybook/preact";

import Button from "components/Button";

const meta: Meta = {
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
};
export default meta;

export const Base = {
  name: "Button",

  args: {
    text: "Button",
  },
};
