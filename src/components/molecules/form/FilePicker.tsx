import { css } from "g-style";
import { h } from "preact";
import { useCallback, useRef } from "preact/hooks";

import Colors from "components/atoms/Colors";

const className = css({
  padding: "1rem",
  color: Colors.white,
  background: Colors.backgroundDark,
  borderRadius: "0.1875rem",
});

export interface Props {
  accept: string;
  onSelect: (file: File) => void;
}

export default ({ accept, onSelect }: Props) => {
  const input = useRef<HTMLInputElement>();

  const handleChange = useCallback(() => {
    if (input.current && input.current.files) {
      const file = input.current.files[0];
      onSelect(file);
    }
  }, [input, onSelect]);

  return (
    <div class={className}>
      <input type="file" ref={input} accept={accept} onChange={handleChange} />
    </div>
  );
};
