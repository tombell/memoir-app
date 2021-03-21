import { h } from "preact";
import { useCallback, useState } from "preact/hooks";

interface Props {
  name: string;
  text: string;
  type: string;
  value?: string;
  onInput: (e: Event) => void;
}

export default ({ name, text, type, value, onInput }: Props) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInput = useCallback((e: Event) => {
    const target = e.target as HTMLInputElement;
    onInput(e);
    setInputValue(target.value);
  }, []);

  return (
    <div class="input">
      <label htmlFor={name}>
        <span class="input__label">{text}</span>
        <input
          class="input__input"
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
