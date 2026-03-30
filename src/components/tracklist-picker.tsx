import { useStore } from "@nanostores/preact";
import { atom } from "nanostores";
import { useCallback, useRef } from "preact/hooks";

import FilePicker from "~/components/file-picker";
import Tag from "~/components/tag";

import { parse } from "~/services/tracklists";

interface Props {
  errors?: string[];
  label?: string;
  name: string;
  onSelect: (tracks: string[][]) => void;
}

const $tracks = atom<string[][] | undefined>();

export default function TracklistPicker({ errors, label, name, onSelect }: Props) {
  const tracks = useStore($tracks);

  const reader = useRef(new FileReader());

  const handleSelect = useCallback(
    (file: File) => {
      const onLoad = () => {
        const result = reader.current.result;

        if (typeof result === "string") {
          const parsed = parse(result);
          $tracks.set(parsed);
          onSelect(parsed);
        }
      };

      reader.current.addEventListener("load", onLoad, { once: true });
      reader.current.readAsText(file);
    },
    [onSelect],
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
