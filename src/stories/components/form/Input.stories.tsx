import { h } from "preact";
import { Meta, Story } from "@storybook/preact";

import Input, { Props } from "components/form/Input";

const meta: Meta = {
  component: Input,
  title: "Components/Form/Input",
  argTypes: { onInput: { action: "input" } },
};
export default meta;

const Template: Story<Props> = (props) => <Input {...props} />;

export const Base = Template.bind({});
Base.storyName = "Input";
Base.args = {
  name: "input",
  text: "Base input",
  type: "text",
};

export const Date = Template.bind({});
Date.args = {
  name: "date",
  text: "Date input",
  type: "date",
};
