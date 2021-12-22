import { Meta, Story } from "@storybook/preact";
import { h } from "preact";
import withMock from "storybook-addon-mock";

import TrackSearch from "components/organisms/TrackSearch";

const meta: Meta = {
  component: TrackSearch,
  title: "Components/Organisms/TrackSearch/TrackSearch",
  decorators: [withMock],
};
export default meta;

const Template: Story = () => <TrackSearch />;

export const Base = Template.bind({});
Base.storyName = "TrackSearch";
Base.parameters = {
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
};
