import { useSignal } from "@preact/signals";
import { useCallback } from "preact/hooks";

interface Props {
  name: string;
  label?: string;
  placeholder: string;
  type?: string;
  value?: string;
  onInput: (value: string) => void;
  onFocus?: (e: Event) => void;
}

export default function Input({
  name,
  label,
  placeholder,
  type = "text",
  value,
  onInput,
  onFocus,
}: Props) {
  const input = useSignal(value);

  const handleInput = useCallback(
    (e: Event) => {
      input.value = (e.target as HTMLInputElement).value;
      onInput(input.value);
    },
    [input, onInput],
  );

  return (
    <div>
      <label htmlFor={name}>
        {label && <span class="mb-2 block font-bold text-white">{label}</span>}

        <input
          class="box-border w-full rounded-sm border border-solid border-gray-700 bg-gray-800 p-3 text-white"
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={input}
          onInput={handleInput}
          onFocus={onFocus}
        />
      </label>
    </div>
  );
}
