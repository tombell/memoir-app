import { Meta } from "@storybook/preact";

import TracklistPicker from "$components/TracklistPicker";

const meta: Meta = {
  component: TracklistPicker,
  argTypes: {
    onSelect: { action: "selected" },
  },
};
export default meta;

export const Base = {
  name: "TracklistPicker",

  args: {
    name: "tracklistpicker",
  },
};

export const Label = {
  args: {
    name: "tracklistpicker with label",
    label: "Tracklist",
  },
};
