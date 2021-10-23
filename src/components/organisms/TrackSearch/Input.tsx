import { h } from "preact";

export interface Props {
  onInput: (event: any) => void;
  onFocus: () => void;
}

export default ({ onInput, onFocus }: Props) => (
  <input
    class="outline-none w-full p-4 text-white bg-gray-800 border border-solid border-gray-700 rounded"
    placeholder="Search tracks..."
    onInput={onInput}
    onFocus={onFocus}
  />
);
