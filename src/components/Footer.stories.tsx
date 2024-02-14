import { Meta } from "@storybook/preact";

import Footer from "@components/Footer";

const meta: Meta = {
  component: Footer,
};
export default meta;

export const Base = {
  render: () => <Footer />,
  name: "Footer",
};
