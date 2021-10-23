import { Meta, Story } from "@storybook/preact";
import { h } from "preact";

import Input, { Props } from "components/organisms/TrackSearch/Input";

const meta: Meta = {
  component: Input,
  title: "Components/Organisms/TrackSearch/Input",
  argTypes: { onInput: { action: "input" }, onFocus: { action: "focus" } },
};
export default meta;

const Template: Story<Props> = (props) => <Input {...props} />;

export const Base = Template.bind({});
Base.storyName = "Input";
