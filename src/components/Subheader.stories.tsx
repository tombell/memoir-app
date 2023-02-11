import { Meta } from "@storybook/preact";

import Subheader, { Props } from "components/Subheader";

const meta: Meta = {
  component: Subheader,
};
export default meta;

export const Base = {
  name: "Subheader",

  args: {
    text: "Subheader",
  },
};

export const Center = {
  args: {
    text: "Centered Subheader",
    center: true,
  },
};
