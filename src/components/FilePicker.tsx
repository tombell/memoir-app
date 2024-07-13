import { useCallback, useRef } from "preact/hooks";

interface Props {
  name: string;
  label?: string;
  accept: string;
  onSelect: (file: File) => void;
}

function FilePicker({ name, label, accept, onSelect }: Props) {
  const input = useRef<HTMLInputElement>(null);

  const handleChange = useCallback(() => {
    if (input.current?.files) {
      const file = input.current.files[0];
      onSelect(file);
    }
  }, [onSelect]);

  return (
    <label htmlFor={name}>
      {label && <span class="mb-2 block font-bold text-white">{label}</span>}

      <div class="rounded border border-solid border-gray-700 bg-gray-800 p-3 text-white">
        <input
          class="block w-full text-sm text-white file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-900 hover:file:bg-violet-100"
          name={name}
          type="file"
          ref={input}
          accept={accept}
          onChange={handleChange}
          data-testid="filepicker"
        />
      </div>
    </label>
  );
}

export default FilePicker;
