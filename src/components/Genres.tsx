import { h } from "preact";
import { css } from "g-style";

import Tag from "components/Tag";

const className = css({
  margin: "0 0.5rem 1rem",
  textAlign: "center",
});

interface Props {
  genres: string[];
}

export default ({ genres }: Props) => (
  <div class={className}>
    {genres.sort().map((genre) => (
      <Tag text={genre} color="blue" />
    ))}
  </div>
);
