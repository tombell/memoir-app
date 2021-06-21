import { h } from "preact";
import { useCallback, useRef } from "preact/hooks";
import { css } from "g-style";

const className = css({
  padding: "1rem",
  /* background: darken($background-color, 5%); */
  borderRadius: "0.1875rem",
});

interface Props {
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
  }, []);

  return (
    <div class={className}>
      <input type="file" ref={input} accept={accept} onChange={handleChange} />
    </div>
  );
};
