import { Meta } from "@storybook/preact";

import TrackSearch from "$components/TrackSearch";

const meta: Meta = {
  component: TrackSearch,
};
export default meta;

export const Base = {
  render: () => <TrackSearch />,
  name: "TrackSearch",

  parameters: {
    mockData: [
      {
        url: "http://localhost:8080/tracks/search?q=",
        method: "GET",
        status: 200,
        response: [
          {
            id: "asdf-asdf",
            artist: "",
            name: "",
            genre: "",
            bpm: 0,
            key: "",
            artistHighlighted: "Ant Garbe",
            nameHighlighted:
              "<<Want>> It Right Now Ft Tesni Jones (Original Mix)",
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
      },
    ],
  },
};
