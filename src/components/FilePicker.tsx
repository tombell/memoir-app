import { h } from 'preact';
import { useCallback, useRef } from 'preact/hooks';

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
    <div class="file-picker">
      <input
        class="file-picker__input"
        type="file"
        ref={input}
        accept={accept}
        onChange={handleChange}
      />
    </div>
  );
};
