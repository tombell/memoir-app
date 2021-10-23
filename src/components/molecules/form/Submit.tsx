import { h } from "preact";

export interface Props {
  onClick: () => void;
}

export default ({ onClick }: Props) => (
  <button
    class="py-3 px-6 font-bold text-white bg-gray-800 rounded border-gray-700 border-solid"
    type="submit"
    onClick={onClick}
  >
    Submit
  </button>
);
