import { Meta, Story } from "@storybook/preact";

import TracklistItem, { Props } from "components/TracklistItem";

const meta: Meta = {
  component: TracklistItem,
};
export default meta;

const Template: Story<Props> = (props) => <TracklistItem {...props} />;

export const Base = Template.bind({});
Base.storyName = "TracklistItem";
Base.args = {
  id: "def-abc",
  name: "IAMDJRIFF pres. The Weekend Warmup (18/06/2021)",
  date: new Date("2021-06-18"),
  artwork: "0cd728bbdbb38f2c1d451b3dea6dd18e.png",
  trackCount: 16,
};
export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
