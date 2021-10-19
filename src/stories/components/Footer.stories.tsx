import { Meta, Story } from "@storybook/preact";
import { h } from "preact";

import Footer from "components/Footer";

const meta: Meta = {
  component: Footer,
  title: "Components/Footer",
};
export default meta;

const Template: Story = () => <Footer />;

export const Base = Template.bind({});
Base.storyName = "Footer";
