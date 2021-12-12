import { Meta, Story } from "@storybook/preact";
import { h } from "preact";

import Footer from "components/molecules/Footer";

const meta: Meta = {
  component: Footer,
  title: "Components/Molecules/Footer",
};
export default meta;

const Template: Story = () => <Footer />;

export const Base = Template.bind({});
Base.storyName = "Footer";
