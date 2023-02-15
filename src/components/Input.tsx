import { useSignal } from "@preact/signals";
import { useCallback } from "preact/hooks";

interface Props {
  name: string;
  label?: string;
  placeholder: string;
  type?: string;
  value?: string;
  onInput: (e: Event) => void;
  onFocus?: (e: Event) => void;
}

const Input = ({
  name,
  label,
  placeholder,
  type = "text",
  value,
  onInput,
  onFocus,
}: Props) => {
  const input = useSignal(value);

  const handleInput = useCallback(
    (e: Event) => {
      input.value = (e.target as HTMLInputElement).value;
      onInput(e);
    },
    [input, onInput]
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
          value={input.value}
          onInput={handleInput}
          onFocus={onFocus}
        />
      </label>
    </div>
  );
};

export default Input;
