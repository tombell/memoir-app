import { h } from "preact";
import { useCallback, useState } from "preact/hooks";
import { css } from "g-style";

import Colors from "components/atoms/Colors";

const className = css({
  marginBottom: "0.5rem",
});

const labelClassName = css({
  display: "block",
  color: Colors.white,
  marginBottom: "0.5rem",
  fontWeight: "bold",
});

const inputClassName = css({
  boxSizing: "border-box",
  display: "block",
  width: "100%",
  padding: "1rem",
  fontSize: "1rem",
  color: Colors.primary,
  background: Colors.backgroundDark,
  border: `0.0625rem solid ${Colors.backgroundDarker}`,
  borderRadius: "0.1875rem",
  outline: 0,

  "&:focus": {
    borderColor: Colors.greyDark,
  },
});

export interface Props {
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
    <div class={className}>
      <label htmlFor={name}>
        <span class={labelClassName}>{text}</span>
        <input
          class={inputClassName}
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
