import { Meta } from "@storybook/preact";

import Input from "components/Input";

const meta: Meta = {
  component: Input,
  argTypes: {
    onInput: { action: "changed" },
    onFocus: { action: "focused" },
  },
};
export default meta;

export const Base = {
  name: "Input",

  args: {
    name: "input",
    label: "Base input",
    type: "text",
  },
};

export const Placeholder = {
  args: {
    name: "input with placeholder",
    placeholder: "Placeholder...",
    type: "text",
  },
};

export const Date = {
  args: {
    name: "date",
    label: "Date input",
    type: "date",
  },
};
