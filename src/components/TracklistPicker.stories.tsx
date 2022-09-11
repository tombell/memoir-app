import { Meta, Story } from "@storybook/preact";

import TracklistPicker, { Props } from "components/TracklistPicker";

const meta: Meta = {
  component: TracklistPicker,
  argTypes: {
    onSelect: { action: "selected" },
  },
};
export default meta;

const Template: Story<Props> = (props) => <TracklistPicker {...props} />;

export const Base = Template.bind({});
Base.storyName = "TracklistPicker";
