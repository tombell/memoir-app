import { Meta } from "@storybook/preact";

import Result from "components/TrackSearch/Result";

const meta: Meta = {
  component: Result,
};
export default meta;

export const Base = {
  name: "Result",

  args: {
    track: {
      id: "asdf-asdf",
      artist: "Armand Van Helden",
      name: "I Want Your Soul",
      genre: "House",
      bpm: 128,
      key: "10A",
      artistHighlighted: "Armand Van Helden",
      nameHighlighted: "I <<Want>> Your Soul",
    },
  },
};
