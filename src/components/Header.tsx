import { h } from "preact";
import { css } from "g-style";

import Breakpoints from "components/atoms/Breakpoints";

import Link from "components/Link";

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

export default () => (
  <header class={className}>
    <Link href="/tracklists/1">
      <img class={logoClassName} src="/images/logo.svg" alt="Memoir" />
    </Link>
  </header>
);
