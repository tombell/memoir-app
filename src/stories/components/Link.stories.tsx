import { h } from "preact";
import { Meta, Story } from "@storybook/preact";

import Link from "components/Link";

const meta: Meta = {
  component: Link,
  title: "Components/Link",
  argTypes: { onClick: { action: "clicked" } },
};
export default meta;

const Template: Story = (props) => <Link {...props} />;

export const Base = Template.bind({});
Base.storyName = "Link";
Base.args = {
  href: "https://google.com",
  children: "Google",
};

export const Clickable = Template.bind({});
Clickable.args = {
  children: "Click me",
};
