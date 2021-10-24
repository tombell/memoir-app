import { Meta, Story } from "@storybook/preact";
import { h } from "preact";

import TracklistItemSkeleton from "components/organisms/TracklistItemSkeleton";

const meta: Meta = {
  component: TracklistItemSkeleton,
  title: "Components/Organisms/TracklistItemSkeleton",
};
export default meta;

const Template: Story = () => <TracklistItemSkeleton />;

export const Base = Template.bind({});
Base.storyName = "TracklistItemSkeleton";
