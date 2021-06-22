import { h } from "preact";
import { css } from "g-style";

import Colors from "components/atoms/Colors";

const className = css({
  display: "inline-block",
  padding: "0.1875rem 0.3125rem",
  marginRight: "0.5rem",
  fontSize: "0.75rem",
  fontWeight: "bold",
  color: Colors.black,
  textAlign: "center",
  borderRadius: "0.1875rem",

  "&.purple": { background: Colors.purple },
  "&.lilac": { background: Colors.lilac },
  "&.blue": { background: Colors.blue },
  "&.green": { background: Colors.green },
  "&.light-blue": { background: Colors.lightBlue },
});

export type TagColor = "purple" | "lilac" | "blue" | "green" | "light-blue";

interface Props {
  text: string | number;
  color?: TagColor;
}

export default ({ text, color = "green" }: Props) => (
  <div class={[className, color].join(" ")}>{text}</div>
);
