import { Meta, Story } from "@storybook/preact";

import Input, { Props } from "components/Input";

const meta: Meta = {
  component: Input,
  argTypes: {
    onInput: { action: "changed" },
    onFocus: { action: "focused" },
  },
};
export default meta;

const Template: Story<Props> = (props) => <Input {...props} />;

export const Base = Template.bind({});
Base.storyName = "Input";
Base.args = {
  name: "input",
  label: "Base input",
  type: "text",
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  name: "input with placeholder",
  placeholder: "Placeholder...",
  type: "text",
};

export const Date = Template.bind({});
Date.args = {
  name: "date",
  label: "Date input",
  type: "date",
};
