import { Meta, Story } from "@storybook/preact";
import { h } from "preact";

import Results, { Props } from "components/organisms/TrackSearch/Results";

const meta: Meta = {
  component: Results,
  title: "Components/Organisms/TrackSearch/Results",
};
export default meta;

const Template: Story<Props> = (props) => <Results {...props} />;

export const Base = Template.bind({});
Base.storyName = "Results";
Base.args = {
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
};
