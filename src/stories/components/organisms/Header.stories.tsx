import { Meta, Story } from "@storybook/preact";
import { h } from "preact";

import Header, { Props } from "components/organisms/Header";

const meta: Meta = {
  component: Header,
  title: "Components/Organisms/Header",
};
export default meta;

const Template: Story<Props> = (props) => <Header {...props} />;

export const Base = Template.bind({});
Base.storyName = "Header";

export const Center = Template.bind({});
Center.args = {
  center: true,
};
