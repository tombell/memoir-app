import { Meta, Story } from "@storybook/preact";
import { h } from "preact";

import Header from "components/molecules/Header";

const meta: Meta = {
  component: Header,
  title: "Components/Molecules/Header",
};
export default meta;

const Template: Story = () => <Header />;

export const Base = Template.bind({});
Base.storyName = "Header";