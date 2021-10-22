import { Meta, Story } from "@storybook/preact";
import { h } from "preact";

import Loading from "components/molecules/Loading";

const meta: Meta = {
  component: Loading,
  title: "Components/Molecules/Loading",
};
export default meta;

const Template: Story = () => <Loading />;

export const Base = Template.bind({});
Base.storyName = "Loading";
