import { Meta, Story } from "@storybook/preact";

import Header from "components/Header";

const meta: Meta = {
  component: Header,
};
export default meta;

const Template: Story = () => <Header />;

export const Base = Template.bind({});
Base.storyName = "Header";
