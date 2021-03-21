import { h } from "preact";

interface Props {
  onClick: () => void;
}

export default ({ onClick }: Props) => (
  <button type="submit" class="submit" onClick={onClick}>
    Submit
  </button>
);
