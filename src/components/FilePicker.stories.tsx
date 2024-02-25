import { Meta } from "@storybook/preact";

import FilePicker from "$components/FilePicker";

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
    name: "filepicker",
    accept: "text/plain",
  },
};

export const Label = {
  args: {
    name: "filepicker with label",
    label: "Filepicker with label",
    accept: "text/plain",
  },
};
