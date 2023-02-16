import { useCallback, useRef } from "preact/hooks";

interface Props {
  accept: string;
  onSelect: (file: File) => void;
}

const FilePicker = ({ accept, onSelect }: Props) => {
  const input = useRef<HTMLInputElement>(null);

  const handleChange = useCallback(() => {
    if (input.current && input.current.files) {
      const file = input.current.files[0];
      onSelect(file);
    }
  }, [input, onSelect]);

  return (
    <div class="rounded border border-solid border-gray-700 bg-gray-800 p-3 text-white">
      <input
        class="block w-full text-sm text-white file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-gray-900 hover:file:bg-violet-100"
        type="file"
        ref={input}
        accept={accept}
        onChange={handleChange}
        data-testid="filepicker"
      />
    </div>
  );
};

export default FilePicker;
