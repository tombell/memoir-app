import { Meta } from "@storybook/preact";

import Results from "@components/TrackSearch/Results";

const meta: Meta = {
  component: Results,
};
export default meta;

export const Base = {
  name: "Results",

  args: {
    show: true,
    tracks: [
      {
        id: "asdf-asdf",
        artist: "",
        name: "",
        genre: "",
        bpm: 0,
        key: "",
        artistHighlighted: "Ant Garbe",
        nameHighlighted: "<<Want>> It Right Now Ft Tesni Jones (Original Mix)",
      },
      {
        id: "asdf-asdf",
        artist: "",
        name: "",
        genre: "",
        bpm: 0,
        key: "",
        artistHighlighted: "The Cube Guys, Peter Brown",
        nameHighlighted: "Do You <<Want>> to Play House (Original Mix)",
      },
      {
        id: "asdf-asdf",
        artist: "",
        name: "",
        genre: "",
        bpm: 0,
        key: "",
        artistHighlighted: "James Curd & Junior Sanchez",
        nameHighlighted: "Everybody <<Wants>> (Original Mix)",
      },
      {
        id: "asdf-asdf",
        artist: "",
        name: "",
        genre: "",
        bpm: 0,
        key: "",
        artistHighlighted: "Armand Van Helden",
        nameHighlighted: "I <<Want>> Your Soul",
      },
    ],
    onResultClick: () => {},
  },
};
