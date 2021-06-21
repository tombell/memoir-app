import { h } from "preact";
import { css } from "g-style";

import { Track } from "services/memoir";

import Breakpoints from "components/atoms/Breakpoints";

import Tag from "components/Tag";

const className = css({
  flexDirection: "column",
  alignItems: "center",
  margin: "0 0.5rem 1rem 0.5rem",
  [Breakpoints.Desktop]: {
    margin: "0 0 1.5rem 0",
  },
});

const nameClassName = css({
  margin: "0 0 0.5rem 0",
  fontWeight: "bold",
  lineHeight: 1.2,
});

interface Props {
  track: Track;
}

export default ({ track }: Props) => (
  <div class={className}>
    <div class={nameClassName}>
      <a href={`/track/${track.id}`}>{`${track.artist} - ${track.name}`}</a>
    </div>

    <div>
      <Tag text={track.bpm.toFixed(2)} color="purple" />
      <Tag text={track.key} color="lilac" />
      <Tag text={track.genre} color="blue" />
    </div>
  </div>
);
