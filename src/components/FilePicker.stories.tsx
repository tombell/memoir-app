import { Meta, Story } from "@storybook/preact";

import FilePicker, { Props } from "components/FilePicker";

const meta: Meta = {
  component: FilePicker,
  argTypes: {
    onSelect: { action: "selected" },
  },
};
export default meta;

const Template: Story<Props> = (props) => <FilePicker {...props} />;

export const Base = Template.bind({});
Base.storyName = "FilePicker";
Base.args = {
  accept: "text/plain",
};
