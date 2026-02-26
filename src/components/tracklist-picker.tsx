import { useStore } from "@nanostores/preact";
import { atom } from "nanostores";
import { useCallback, useMemo } from "preact/hooks";

import Tag from "~/components/Tag";
import FilePicker from "~/components/file-picker";

import { parse } from "~/services/tracklists";

interface Props {
  errors?: string[];
  label?: string;
  name: string;
  onSelect: (tracks: string[][]) => void;
}

const $tracks = atom<string[][] | undefined>();

export default function TracklistPicker({
  errors,
  label,
  name,
  onSelect,
}: Props) {
  const tracks = useStore($tracks);

  const reader = useMemo(() => new FileReader(), []);

  const onFileRead = useCallback(() => {
    if (reader.result && typeof reader.result === "string") {
      const parsed = parse(reader.result);
      $tracks.set(parsed);
      onSelect(parsed);
    }
  }, []);

  const handleSelect = useCallback(
    (file: File) => {
      reader.onload = onFileRead;
      reader.readAsText(file);
    },
    [onFileRead, reader],
  );

  if (tracks) {
    return (
      <ol class="box-border w-full space-y-2 rounded-sm bg-gray-800 p-8">
        {tracks.map((track, idx) => (
          <li
            key={crypto.randomUUID()}
            class="mx-0 list-inside list-none text-xs font-bold text-white"
          >
            <p>{`${idx + 1}. ${track[1]} - ${track[0]}`}</p>

            <div class="mt-2 space-x-2">
              <Tag text={track[2]} color="purple" />
              <Tag text={track[3]} color="lilac" />
              {track[4] && <Tag text={track[4]} color="blue" />}
            </div>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <FilePicker
      name={name}
      label={label}
      accept="text/plain"
      errors={errors}
      onSelect={handleSelect}
    />
  );
}
