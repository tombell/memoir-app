import { h } from "preact";

export interface Props {
  onClick: () => void;
}

export default ({ onClick }: Props) => (
  <button class="px-3 py-1 font-bold text-white bg-gray-700 rounded" type="submit" onClick={onClick}>
    Submit
  </button>
);
