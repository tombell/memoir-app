import { h } from "preact";
import { css } from "g-style";

import Breakpoints from "components/atoms/Breakpoints";

import Link from "components/Link";
import Tag from "components/molecules/Tag";

const className = css({
  flexDirection: "column",
  alignItems: "center",
  margin: "0 0.5rem 1rem 0.5rem",
  [Breakpoints.desktop]: {
    margin: "0 0 1.5rem 0",
  },
});

const nameClassName = css({
  margin: "0 0 0.5rem 0",
  fontWeight: "bold",
  lineHeight: 1.2,
});

export interface Props {
  id: string;
  artist: string;
  name: string;
  genre: string;
  bpm: number;
  camelotKey: string;
}

export default ({ id, artist, name, genre, bpm, camelotKey }: Props) => (
  <div class={className}>
    <div class={nameClassName}>
      <Link href={`/track/${id}`}>{`${artist} - ${name}`}</Link>
    </div>

    <div>
      <Tag text={bpm.toFixed(2)} color="purple" />
      <Tag text={camelotKey} color="lilac" />
      <Tag text={genre} color="blue" />
    </div>
  </div>
);
