import { Meta } from "@storybook/preact";

import FilePicker from "components/FilePicker";

const meta: Meta = {
  component: FilePicker,
  argTypes: {
    onSelect: { action: "selected" },
  },
};
export default meta;

export const Base = {
  name: "FilePicker",

  args: {
    accept: "text/plain",
  },
};
