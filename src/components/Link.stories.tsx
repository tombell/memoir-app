import { Meta } from "@storybook/preact";

import Link from "$components/Link";

const meta: Meta = {
  component: Link,
  argTypes: {
    onClick: { action: "clicked" },
  },
};
export default meta;

export const Base = {
  name: "Link",

  args: {
    href: "https://google.com",
    children: "Google",
  },
};
