import { h } from "preact";
import { css } from "g-style";

import Colors from "components/atoms/Colors";

const className = css({
  padding: "0.75rem 1rem",
  fontWeight: "bold",
  color: Colors.primary,
  /* TODO: background: darken($background-color, 5%); */
  border: 0,
  borderRadius: "0.1875rem",
});

interface Props {
  onClick: () => void;
}

export default ({ onClick }: Props) => (
  <button class={className} type="submit" onClick={onClick}>
    Submit
  </button>
);
