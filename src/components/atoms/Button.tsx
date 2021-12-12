import { h } from "preact";

export interface Props {
  text: string;
  onClick: () => void;
}

export default ({ text, onClick }: Props) => (
  <button
    class="py-3 px-6 font-bold text-white bg-gray-800 rounded border-gray-700 border-solid"
    type="button"
    onClick={onClick}
  >
    {text}
  </button>
);
