import { h } from "preact";
import { useCallback, useState } from "preact/hooks";

export interface Props {
  name: string;
  label?: string;
  placeholder: string;
  type?: string;
  value?: string;
  onInput: (e: Event) => void;
  onFocus?: (e: Event) => void;
}

export default ({
  name,
  label,
  placeholder,
  type = "text",
  value,
  onInput,
  onFocus,
}: Props) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInput = useCallback(
    (e: Event) => {
      setInputValue((e.target as HTMLInputElement).value);
      onInput(e);
    },
    [onInput]
  );

  return (
    <div>
      <label htmlFor={name}>
        {label && <span class="block font-bold text-white mb-2">{label}</span>}

        <input
          class="box-border w-full p-3 text-white bg-gray-800 border border-solid border-gray-700 rounded"
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={inputValue}
          onInput={handleInput}
          onFocus={onFocus}
        />
      </label>
    </div>
  );
};
