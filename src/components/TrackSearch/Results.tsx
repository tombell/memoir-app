import Result from "$/components/TrackSearch/Result";

import type { Track } from "$/services/memoir/types";

interface Props {
  show: boolean;
  tracks?: Track[] | null;
  onResultClick: () => void;
}

export default function Results({ show, tracks, onResultClick }: Props) {
  if (!tracks || !show) {
    return null;
  }

  return (
    <div class="absolute z-10 mt-2 box-border w-full rounded-sm border border-solid border-gray-700 bg-gray-800 p-2.5">
      <ul class="m-0 p-0">
        {tracks.length === 0 && <li class="text-white">No results</li>}

        {tracks.map((track) => (
          <Result key={track.id} track={track} onClick={onResultClick} />
        ))}
      </ul>
    </div>
  );
}
