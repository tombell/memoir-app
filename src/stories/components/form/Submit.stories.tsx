import { h } from "preact";
import { Meta, Story } from "@storybook/preact";

import Submit, { Props } from "components/form/Submit";

const meta: Meta = {
  component: Submit,
  title: "Components/Form/Submit",
  argTypes: { onClick: { action: "clicked" } },
  parameters: { actions: { argTypesRegex: "^on.*" } },
};
export default meta;

const Template: Story<Props> = (props) => <Submit {...props} />;

export const Base = Template.bind({});
Base.storyName = "Submit";
