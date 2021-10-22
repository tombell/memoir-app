import { css } from "g-style";
import { h } from "preact";

import Colors from "components/atoms/Colors";

const className = css({
  display: "flex",
  alignItems: "center",
  color: Colors.white,
});

const spinnerClassName = css({
  "@keyframes spin": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },

  width: 36,
  height: 36,
  padding: 0,
  border: `0.25rem solid ${Colors.primary}`,
  borderTop: `0.25rem solid ${Colors.secondary}`,
  borderRight: `0.25rem solid ${Colors.secondary}`,
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
});

const textClassName = css({
  marginLeft: "1rem",
});

export default () => (
  <div class={className}>
    <div class={spinnerClassName} />
    <h2 class={textClassName}>Loading...</h2>
  </div>
);
