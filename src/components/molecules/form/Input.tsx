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
        {label && <span class="block mb-2 font-bold text-white">{label}</span>}

        <input
          class="p-3 w-full text-white bg-gray-800 rounded border border-gray-700 border-solid box-border"
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
