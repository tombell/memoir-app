import { Meta } from "@storybook/preact";

import TracklistItem from "$components/TracklistItem";

const meta: Meta = {
  component: TracklistItem,
};
export default meta;

export const Base = {
  name: "TracklistItem",

  args: {
    id: "def-abc",
    name: "IAMDJRIFF pres. The Weekend Warmup (18/06/2021)",
    date: new Date("2021-06-18"),
    artwork: "0cd728bbdbb38f2c1d451b3dea6dd18e.png",
    trackCount: 16,
  },
};

export const Loading = {
  args: {
    loading: true,
  },
};
