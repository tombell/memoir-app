import { useCallback, useMemo, useState } from "preact/hooks";

import FilePicker from "components/FilePicker";
import Tag from "components/Tag";

import parse from "services/tracklists";

import "./TracklistPicker.css";

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

  return tracks ? (
    <ol class="tracklist-picker">
      {tracks.map((track, idx) => (
        <li class="tracklist-picker-track">
          <p>{`${idx + 1}. ${track[1]} - ${track[0]}`}</p>

          <div class="tracklist-picker-track-tags">
            <Tag text={track[2]} color="purple" />
            <Tag text={track[3]} color="lilac" />
            <Tag text={track[4]} color="blue" />
          </div>
        </li>
      ))}
    </ol>
  ) : (
    <FilePicker accept="text/plain" onSelect={handleSelect} />
  );
};

export default TracklistPicker;
