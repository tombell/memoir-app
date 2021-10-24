import { h } from "preact";

export interface Props {
  text: string;
  type?: string;
  onClick: () => void;
}

export default ({ text, type = "button", onClick }: Props) => (
  <button
    class="py-3 px-6 font-bold text-white bg-gray-800 rounded border-gray-700 border-solid"
    type={type}
    onClick={onClick}
  >
    {text}
  </button>
);
