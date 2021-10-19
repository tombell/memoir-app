import { css } from "g-style";
import { h } from "preact";

import Breakpoints from "components/atoms/Breakpoints";

import Link from "components/molecules/Link";

const className = css({
  width: 60,
  [Breakpoints.desktop]: {
    width: 120,
  },
});

const logoClassName = css({
  width: 60,
  height: 44,
  [Breakpoints.desktop]: {
    width: 120,
    height: 88,
  },
});

export interface Props {
  center?: boolean;
}

export default ({ center = false }: Props) => (
  <header class={className} style={{ margin: center ? "0 auto" : null }}>
    <Link href="/tracklists/1">
      <img class={logoClassName} src="/images/logo.svg" alt="Memoir" />
    </Link>
  </header>
);
