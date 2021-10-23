import { Meta, Story } from "@storybook/preact";
import { h } from "preact";

import Result, { Props } from "components/organisms/TrackSearch/Result";

const meta: Meta = {
  component: Result,
  title: "Components/Organisms/TrackSearch/Result",
};
export default meta;

const Template: Story<Props> = (props) => <Result {...props} />;

export const Base = Template.bind({});
Base.storyName = "Result";
Base.args = {
  track: {
    id: "asdf-asdf",
    artist: "Armand Van Helden",
    name: "I Want Your Soul",
    genre: "House",
    bpm: 128,
    key: "10A",
    artistHighlighted: "Armand Van Helden",
    nameHighlighted: "I <<Want>> Your Soul",
  }
};
