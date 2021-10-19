import { Meta, Story } from "@storybook/preact";
import { h } from "preact";

import Subheader, { Props } from "components/molecules/Subheader";

const meta: Meta = {
  component: Subheader,
  title: "Components/Molecules/Subheader",
};
export default meta;

const Template: Story<Props> = (props) => <Subheader {...props} />;

export const Base = Template.bind({});
Base.storyName = "Subheader";
Base.args = {
  text: "Subheader",
};

export const Center = Template.bind({});
Center.args = {
  text: "Centered Subheader",
  center: true,
};
