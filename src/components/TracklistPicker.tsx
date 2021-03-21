import { h } from "preact";
import { useCallback, useState } from "preact/hooks";

import tracklistParser from "utils/tracklist-parser";

import FilePicker from "components/FilePicker";
import Tag from "components/Tag";

interface Props {
  onSelect: (tracks: string[][]) => void;
}

export default ({ onSelect }: Props) => {
  const [tracks, setTracks] = useState<string[][] | null>(null);

  const reader = new FileReader();

  const onFileRead = useCallback(() => {
    if (reader.result) {
      const parsed = tracklistParser(reader.result.toString());
      setTracks(parsed);
      onSelect(parsed);
    }
  }, []);

  const handleSelect = useCallback((file: File) => {
    reader.onload = onFileRead;
    reader.readAsText(file);
  }, []);

  return (
    <div class="tracklist-picker">
      {!tracks && <FilePicker accept="text/plain" onSelect={handleSelect} />}

      {tracks && (
        <ol class="tracklist-picker__tracks">
          {tracks.map((track) => (
            <li class="tracklist-picker__track">
              <p>
                {track[1]}
                {" - "}
                {track[0]}
              </p>

              <div class="tracklist-picker__tags">
                <Tag text={track[2]} color="purple" />
                <Tag text={track[3]} color="lilac" />
                <Tag text={track[4]} color="blue" />
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};
