import { h } from "preact";
import { useCallback, useState } from "preact/hooks";

export interface Props {
  name: string;
  text: string;
  type: string;
  value?: string;
  onInput: (e: Event) => void;
}

export default ({ name, text, type, value, onInput }: Props) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInput = useCallback(
    (e: Event) => {
      const target = e.target as HTMLInputElement;
      onInput(e);
      setInputValue(target.value);
    },
    [onInput]
  );

  return (
    <div class="mb-2">
      <label htmlFor={name}>
        <span class="block font-bold text-white mb-2">{text}</span>

        <input
          class="outline-none block box-border w-full p-4 text-base text-white bg-gray-700 rounded"
          type={type}
          id={name}
          name={name}
          about={value}
          value={inputValue}
          onInput={handleInput}
        />
      </label>
    </div>
  );
};
