import { Meta } from "@storybook/preact";

import TrackItem from "@components/TrackItem";

const meta: Meta = {
  component: TrackItem,
};
export default meta;

export const Base = {
  name: "TrackItem",

  args: {
    id: "abc-def",
    artist: "Tommy Trash, Yolanda Be Cool",
    name: "Emergency (Extended Mix)",
    genre: "Tech House",
    bpm: 124,
    camelotKey: "1A",
  },
};

export const Loading = {
  args: {
    loading: true,
  },
};
