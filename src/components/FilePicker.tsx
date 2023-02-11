import { useCallback, useRef } from "preact/hooks";

import "./FilePicker.css";

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
    <div class="filepicker">
      <input
        class="filepicker-input"
        type="file"
        ref={input}
        accept={accept}
        onChange={handleChange}
      />
    </div>
  );
};

export default FilePicker;
