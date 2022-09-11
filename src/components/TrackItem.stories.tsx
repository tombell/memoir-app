import { Meta, Story } from "@storybook/preact";

import TrackItem, { Props } from "components/TrackItem";

const meta: Meta = {
  component: TrackItem,
  title: "Components/Organisms/TrackItem",
};
export default meta;

const Template: Story<Props> = (props) => <TrackItem {...props} />;

export const Base = Template.bind({});
Base.storyName = "TrackItem";
Base.args = {
  id: "abc-def",
  artist: "Tommy Trash, Yolanda Be Cool",
  name: "Emergency (Extended Mix)",
  genre: "Tech House",
  bpm: 124,
  camelotKey: "1A",
};
