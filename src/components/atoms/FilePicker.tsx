import { h } from "preact";
import { useCallback, useRef } from "preact/hooks";

export interface Props {
  accept: string;
  onSelect: (file: File) => void;
}

export default ({ accept, onSelect }: Props) => {
  const input = useRef<HTMLInputElement>(null);

  const handleChange = useCallback(() => {
    if (input.current && input.current.files) {
      const file = input.current.files[0];
      onSelect(file);
    }
  }, [input, onSelect]);

  return (
    <div class="p-3 text-white bg-gray-800 rounded border border-gray-700 border-solid">
      <input type="file" ref={input} accept={accept} onChange={handleChange} />
    </div>
  );
};
