import type { Meta } from "@storybook/preact";

import Genres from "$components/Genres";

const meta: Meta = {
  component: Genres,
};
export default meta;

export const Base = {
  name: "Genres",

  args: {
    genres: ["House", "Tech House", "Funky/Goove/Jackin' House"],
  },
};
