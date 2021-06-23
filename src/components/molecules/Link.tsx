import { h } from "preact";
import { css } from "g-style";

import Colors from "components/atoms/Colors";

const baseClassName = css({
  color: Colors.primary,
  textDecoration: "none",
  cursor: "pointer",

  "&:hover": {
    color: Colors.secondary,
  },
});

export interface Props {
  className?: string;
  href?: string;
  onClick?: any;
  children?: any;
}

export default ({ className, href, onClick, children }: Props) => (
  <a class={[baseClassName, className].join(" ")} href={href} onClick={onClick}>
    {children}
  </a>
);
