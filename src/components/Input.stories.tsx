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
  },
};

export const Label = {
  args: {
    name: "input with label",
    label: "Text input",
  },
};

export const Placeholder = {
  args: {
    name: "input with placeholder",
    placeholder: "Placeholder...",
  },
};

export const PlaceholderWithLabel = {
  args: {
    name: "input with placeholder",
    label: "Text input with label",
    placeholder: "Placeholder...",
  },
};

export const Number = {
  args: {
    name: "number",
    label: "Number input",
    type: "number",
  },
};
export const Date = {
  args: {
    name: "date",
    label: "Date input",
    type: "date",
  },
};
