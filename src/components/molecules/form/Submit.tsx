import { h } from "preact";
import { css } from "g-style";

import Colors from "components/atoms/Colors";

const className = css({
  padding: "0.75rem 1rem",
  fontWeight: "bold",
  color: Colors.primary,
  background: Colors.backgroundDark,
  border: 0,
  borderRadius: "0.1875rem",
});

export interface Props {
  onClick: () => void;
}

export default ({ onClick }: Props) => (
  <button class={className} type="submit" onClick={onClick}>
    Submit
  </button>
);
