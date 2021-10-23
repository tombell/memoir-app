import { Meta, Story } from "@storybook/preact";
import { h } from "preact";

import Header from "components/organisms/Header";

const meta: Meta = {
  component: Header,
  title: "Components/Organisms/Header",
};
export default meta;

const Template: Story = () => <Header />;

export const Base = Template.bind({});
Base.storyName = "Header";
