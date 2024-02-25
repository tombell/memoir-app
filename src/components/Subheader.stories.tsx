import { Meta } from "@storybook/preact";

import Subheader from "$components/Subheader";

const meta: Meta = {
  component: Subheader,
};
export default meta;

export const Base = {
  name: "Subheader",

  args: {
    text: "Subheader",
    center: false,
  },
};

export const Center = {
  args: {
    text: "Centered Subheader",
    center: true,
  },
};
