import { h } from "preact";
import { Meta, Story } from "@storybook/preact";

import TracklistItem, { Props } from "components/TracklistItem";

const meta: Meta = {
  component: TracklistItem,
  title: "Components/TracklistItem",
};
export default meta;

const Template: Story<Props> = (props) => <TracklistItem {...props} />;

export const Base = Template.bind({});
Base.storyName = "TracklistItem";
Base.args = {
  id: "def-abc",
  name: "IAMDJRIFF pres. The Weekend Warmup (18/06/2021)",
  date: "2021-06-18",
  artwork: "the-weekend-warmup.png",
  trackCount: 16,
};
