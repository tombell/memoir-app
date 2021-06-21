import { h } from "preact";
import { css } from "g-style";

import Breakpoints from "components/atoms/Breakpoints";

const className = css({
  display: "flex",
  margin: "3rem 1rem 1rem",
  fontSize: "0.75rem",
  fontWeight: "bold",
  [Breakpoints.Desktop]: {
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
  [Breakpoints.Desktop]: {
    display: "inline",
    marginRight: "1rem",
  },
});

export default () => (
  <footer class={className}>
    <div class={leftClassName}>
      <a class={linkClassName} href="/tracklists/1">
        Tracklists
      </a>
      <a class={linkClassName} href="/tracks/mostplayed">
        Most Played Tracks
      </a>
    </div>
    <div class={rightClassName}>
      <a class={linkClassName} href="https://mixcloud.com/iamdjriff">
        IAMDJRIFF on Mixcloud
      </a>
    </div>
  </footer>
);
