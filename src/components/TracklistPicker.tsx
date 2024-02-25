import { useSignal } from "@preact/signals";
import { useCallback, useMemo } from "preact/hooks";

import FilePicker from "$components/FilePicker";
import Tag from "$components/Tag";

import parse from "$services/tracklists";

interface Props {
  name: string;
  label?: string;
  onSelect: (tracks: string[][]) => void;
}

function TracklistPicker({ name, label, onSelect }: Props) {
  const tracks = useSignal<string[][] | null>(null);

  const reader = useMemo(() => new FileReader(), []);

  const onFileRead = useCallback(() => {
    if (reader.result) {
      const parsed = parse(reader.result.toString());
      tracks.value = parsed;
      onSelect(tracks.value);
    }
  }, [onSelect, tracks, reader]);

  const handleSelect = useCallback(
    (file: File) => {
      reader.onload = onFileRead;
      reader.readAsText(file);
    },
    [onFileRead, reader],
  );

  return tracks.value ? (
    <ol class="box-border w-full space-y-2 rounded bg-gray-800 p-8">
      {tracks.value.map((track, idx) => (
        <li class="mx-0 list-inside list-none text-xs font-bold text-white">
          <p>{`${idx + 1}. ${track[1]} - ${track[0]}`}</p>

          <div class="mt-2 space-x-2" data-testid="track-details">
            <Tag text={track[2]} color="purple" />
            <Tag text={track[3]} color="lilac" />
            <Tag text={track[4]} color="blue" />
          </div>
        </li>
      ))}
    </ol>
  ) : (
    <FilePicker
      name={name}
      label={label}
      accept="text/plain"
      onSelect={handleSelect}
    />
  );
}

export default TracklistPicker;
