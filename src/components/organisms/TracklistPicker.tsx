import { Fragment, h } from "preact";
import { useCallback, useMemo, useState } from "preact/hooks";

import Tag from "components/molecules/Tag";
import FilePicker from "components/molecules/form/FilePicker";

import parse from "services/tracklists";

export interface Props {
  onSelect: (tracks: string[][]) => void;
}

export default ({ onSelect }: Props) => {
  const [tracks, setTracks] = useState<string[][] | null>(null);

  const reader = useMemo(() => new FileReader(), []);

  const onFileRead = useCallback(() => {
    if (reader.result) {
      const parsed = parse(reader.result.toString());
      setTracks(parsed);
      onSelect(parsed);
    }
  }, [reader, onSelect]);

  const handleSelect = useCallback(
    (file: File) => {
      reader.onload = onFileRead;
      reader.readAsText(file);
    },
    [reader, onFileRead]
  );

  return (
    <>
      {!tracks && <FilePicker accept="text/plain" onSelect={handleSelect} />}

      {tracks && (
        <ol class="box-border w-full p-8 bg-gray-700 rounded">
          {tracks.map((track) => (
            <li class="mb-2 mx-0 font-bold text-xs text-white list-inside list-none">
              <p>
                {`${track[1]} - ${track[0]}`}
              </p>

              <div class="mt-2">
                <Tag text={track[2]} color="purple" />
                <Tag text={track[3]} color="lilac" />
                <Tag text={track[4]} color="blue" />
              </div>
            </li>
          ))}
        </ol>
      )}
    </>
  );
};
