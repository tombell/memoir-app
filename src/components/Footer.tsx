import { h } from "preact";
import { css } from "g-style";

import Breakpoints from "components/atoms/Breakpoints";

import Link from "components/Link";

const className = css({
  display: "flex",
  margin: "3rem 1rem 1rem",
  fontSize: "0.75rem",
  fontWeight: "bold",
  [Breakpoints.desktop]: {
    margin: "5rem 0 3.125rem 0",
  },
});

const leftClassName = css({
  flex: 1,
});

const rightClassName = css({
  display: "flex",
  flex: 1,
  justifyContent: "flex-end",
});

const linkClassName = css({
  display: "block",
  marginBottom: "0.5rem",
  [Breakpoints.desktop]: {
    display: "inline",
    marginRight: "1rem",
  },
});

export default () => (
  <footer class={className}>
    <div class={leftClassName}>
      <Link className={linkClassName} href="/tracklists/1">
        Tracklists
      </Link>
      <Link className={linkClassName} href="/tracks/mostplayed">
        Most Played Tracks
      </Link>
    </div>

    <div class={rightClassName}>
      <Link className={linkClassName} href="https://mixcloud.com/iamdjriff">
        IAMDJRIFF on Mixcloud
      </Link>
    </div>
  </footer>
);
