import { h } from "preact";
import { css } from "g-style";

import Colors from "components/atoms/Colors";

const className = css({
  color: Colors.white,
  fontWeight: "bold",
});

export interface Props {
  text: string;
  center?: boolean;
}

export default ({ text, center = false }: Props) => (
  <h2 class={className} style={{ textAlign: center ? "center" : "left" }}>
    {text}
  </h2>
);
