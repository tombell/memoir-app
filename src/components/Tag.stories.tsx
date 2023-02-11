import { Meta } from "@storybook/preact";

import Tag, { Props } from "components/Tag";

const meta: Meta = {
  component: Tag,
};
export default meta;

export const Base = {
  name: "Tag",

  args: {
    text: "Base",
  },
};

export const Purple = {
  args: {
    text: "Purple",
    color: "purple",
  },
};

export const Lilac = {
  args: {
    text: "Lilac",
    color: "lilac",
  },
};

export const Blue = {
  args: {
    text: "Blue",
    color: "blue",
  },
};

export const Green = {
  args: {
    text: "Green",
    color: "green",
  },
};

export const LightBlue = {
  args: {
    text: "Light Blue",
    color: "lightblue",
  },
};
