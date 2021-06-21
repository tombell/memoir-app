import { h } from "preact";
import { css } from "g-style";

import Breakpoints from "components/atoms/Breakpoints";

const className = css({
  width: 60,
  margin: "1rem auto",
  [Breakpoints.desktop]: {
    width: 120,
    marginBottom: "4rem",
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
    <a href="/tracklists/1">
      <img class={logoClassName} src="/images/logo.svg" alt="Memoir" />
    </a>
  </header>
);
