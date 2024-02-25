import { Meta } from "@storybook/preact";

import Loading from "$components/Loading";

const meta: Meta = {
  component: Loading,
};
export default meta;

export const Base = {
  render: () => <Loading />,
  name: "Loading",
};
