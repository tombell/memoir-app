import { h } from "preact";

import Tag from "components/Tag";

interface Props {
  genres: string[];
}

export default ({ genres }: Props) => (
  <div class="genres">
    {genres.sort().map((genre) => (
      <Tag text={genre} color="blue" />
    ))}
  </div>
);
