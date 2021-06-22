import { h } from "preact";
import { Meta, Story } from "@storybook/preact";

import Loading from "components/Loading";

const meta: Meta = {
  component: Loading,
  title: "Components/Loading",
};
export default meta;

const Template: Story = () => <Loading />;

export const Base = Template.bind({});
Base.storyName = "Loading";
