import { h } from "preact";
import { css } from "g-style";

import Tag from "components/Tag";

const className = css({
  display: "flex",
  margin: "0 0.5rem 1rem",
  justifyContext: "space-between",
});

export interface Props {
  genres: string[];
}

export default ({ genres }: Props) => (
  <div class={className}>
    {genres.sort().map((genre) => (
      <Tag text={genre} color="blue" />
    ))}
  </div>
);
