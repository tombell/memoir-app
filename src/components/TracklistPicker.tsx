import { signal } from "@preact/signals";
import { useCallback, useMemo } from "preact/hooks";

import FilePicker from "components/FilePicker";
import Tag from "components/Tag";

import parse from "services/tracklists";

import "./TracklistPicker.css";

interface Props {
  onSelect: (tracks: string[][]) => void;
}

const tracks = signal<string[][] | null>(null);

const TracklistPicker = ({ onSelect }: Props) => {
  const reader = useMemo(() => new FileReader(), []);

  const onFileRead = useCallback(() => {
    if (reader.result) {
      const parsed = parse(reader.result.toString());
      tracks.value = parsed;
      onSelect(tracks.value);
    }
  }, [reader, onSelect]);

  const handleSelect = useCallback(
    (file: File) => {
      reader.onload = onFileRead;
      reader.readAsText(file);
    },
    [reader, onFileRead]
  );

  return tracks.value ? (
    <ol class="tracklist-picker">
      {tracks.value.map((track, idx) => (
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
