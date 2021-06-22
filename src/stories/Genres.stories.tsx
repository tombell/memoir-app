import { h } from "preact";
import { Meta, Story } from "@storybook/preact";

import Genres, { Props } from "components/Genres";

const meta: Meta = {
  component: Genres,
  title: "Components/Genres",
};
export default meta;

const Template: Story<Props> = (props) => <Genres {...props} />;

export const Base = Template.bind({});
Base.storyName = "Genres";
Base.args = {
  genres: ["House", "Tech House", "Funky/Goove/Jackin' House"],
};
