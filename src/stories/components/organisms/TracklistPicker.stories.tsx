import { Meta, Story } from "@storybook/preact";
import { h } from "preact";

import TracklistPicker, { Props } from "components/organisms/TracklistPicker";

const meta: Meta = {
  component: TracklistPicker,
  title: "Components/Organisms/TracklistPicker",
  argTypes: { onSelect: { action: "select" } },
};
export default meta;

const Template: Story<Props> = (props) => <TracklistPicker {...props} />;

export const Base = Template.bind({});
Base.storyName = "TracklistPicker";