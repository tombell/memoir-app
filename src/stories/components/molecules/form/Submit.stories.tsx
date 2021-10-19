import { Meta, Story } from "@storybook/preact";
import { h } from "preact";

import Submit, { Props } from "components/molecules/form/Submit";

const meta: Meta = {
  component: Submit,
  title: "Components/Molecules/Form/Submit",
  argTypes: { onClick: { action: "clicked" } },
};
export default meta;

const Template: Story<Props> = (props) => <Submit {...props} />;

export const Base = Template.bind({});
Base.storyName = "Submit";
