import { h } from "preact";
import { css } from "g-style";

const className = css({
  marginBottom: "1rem",
  fontWeight: "bold",
  textAlign: "center",
});

interface Props {
  text: string;
}

export default ({ text }: Props) => <h2 class={className}>{text}</h2>;
