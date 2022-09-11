import { useCallback, useMemo, useState } from "preact/hooks";

import FilePicker from "components/atoms/FilePicker";
import Tag from "components/atoms/Tag";

import parse from "services/tracklists";

export interface Props {
  onSelect: (tracks: string[][]) => void;
}

const TracklistPicker = ({ onSelect }: Props) => {
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
        <ol class="p-8 space-y-2 w-full bg-gray-800 rounded box-border">
          {tracks.map((track, idx) => (
            <li class="mx-0 text-xs font-bold list-none list-inside text-white">
              <p>{`${idx + 1}. ${track[1]} - ${track[0]}`}</p>

              <div class="mt-2 space-x-2">
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

export default TracklistPicker;
