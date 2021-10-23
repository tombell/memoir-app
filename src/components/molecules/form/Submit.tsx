import { h } from "preact";

export interface Props {
  onClick: () => void;
}

export default ({ onClick }: Props) => (
  <button
    class="px-6 py-3 font-bold text-white bg-gray-800 border-solid border-gray-700 rounded"
    type="submit"
    onClick={onClick}
  >
    Submit
  </button>
);
