import { Meta, Story } from "@storybook/preact";
import { h } from "preact";

import Link from "components/molecules/Link";

const meta: Meta = {
  component: Link,
  title: "Components/Molecules/Link",
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
