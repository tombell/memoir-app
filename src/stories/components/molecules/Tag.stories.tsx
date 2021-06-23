import { h } from "preact";
import { Meta, Story } from "@storybook/preact";

import Tag, { Props } from "components/molecules/Tag";

const meta: Meta = {
  component: Tag,
  title: "Components/Molecules/Tag",
};
export default meta;

const Template: Story<Props> = (props) => <Tag {...props} />;

export const Base = Template.bind({});
Base.storyName = "Tag";
Base.args = {
  text: "Base",
};

export const Purple = Template.bind({});
Purple.args = {
  text: "Purple",
  color: "purple",
};

export const Lilac = Template.bind({});
Lilac.args = {
  text: "Lilac",
  color: "lilac",
};

export const Blue = Template.bind({});
Blue.args = {
  text: "Blue",
  color: "blue",
};

export const Green = Template.bind({});
Green.args = {
  text: "Green",
  color: "green",
};

export const LightBlue = Template.bind({});
LightBlue.args = {
  text: "Light Blue",
  color: "light-blue",
};
