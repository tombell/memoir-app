import { Fragment, h } from "preact";

import Tag from "components/molecules/Tag";

export interface Props {
  genres: string[];
}

export default ({ genres }: Props) => (
  <>
    {genres.sort().map((genre) => (
      <Tag text={genre} color="blue" />
    ))}
  </>
);
