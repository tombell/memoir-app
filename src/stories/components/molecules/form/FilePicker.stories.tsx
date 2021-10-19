import { Meta, Story } from "@storybook/preact";
import { h } from "preact";

import FilePicker, { Props } from "components/molecules/form/FilePicker";

const meta: Meta = {
  component: FilePicker,
  title: "Components/Molecules/Form/FilePicker",
  argTypes: { onSelect: { action: "select" } },
};
export default meta;

const Template: Story<Props> = (props) => <FilePicker {...props} />;

export const Base = Template.bind({});
Base.storyName = "FilePicker";
Base.args = {
  accept: "text/plain",
};
