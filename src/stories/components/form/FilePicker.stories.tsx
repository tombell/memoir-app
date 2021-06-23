import { h } from "preact";
import { Meta, Story } from "@storybook/preact";

import FilePicker, { Props } from "components/form/FilePicker";

const meta: Meta = {
  component: FilePicker,
  title: "Components/Form/FilePicker",
  argTypes: { onSelect: { action: "select" } },
};
export default meta;

const Template: Story<Props> = (props) => <FilePicker {...props} />;

export const Base = Template.bind({});
Base.storyName = "FilePicker";
Base.args = {
  accept: "text/plain",
};
