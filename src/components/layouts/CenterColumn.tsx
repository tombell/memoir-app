import { css } from "g-style";
import { h } from "preact";

import Colors from "components/atoms/Colors";

const className = css({
  color: Colors.primary,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const colClassName = css({
  flex: 1,
  maxWidth: "40rem",
});

interface Props {
  children: any;
}

export default ({ children }: Props) => (
  <div class={className}>
    <div class={colClassName}>{children}</div>
  </div>
);
