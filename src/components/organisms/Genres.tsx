import { h } from "preact";

import Tag from "components/molecules/Tag";

export interface Props {
  genres: string[];
}

export default ({ genres }: Props) => (
  <div class="space-x-2">
    {genres.sort().map((genre) => (
      <Tag text={genre} color="blue" />
    ))}
  </div>
);
