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
      <input
        class="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white-50 file:text-gray-900 hover:file:bg-white-100"
        type="file"
        ref={input}
        accept={accept}
        onChange={handleChange}
      />
    </div>
  );
};
