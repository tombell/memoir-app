import { Meta, Story } from "@storybook/preact";

import Button, { Props } from "components/Button";

const meta: Meta = {
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
};
export default meta;

const Template: Story<Props> = (props) => <Button {...props} />;

export const Base = Template.bind({});
Base.storyName = "Button";
Base.args = {
  text: "Button",
};
