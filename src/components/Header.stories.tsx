import type { Meta } from "@storybook/preact";

import Header from "$/components/Header";

const meta: Meta = {
  component: Header,
};
export default meta;

export const Base = {
  render: () => <Header />,
  name: "Header",
};
