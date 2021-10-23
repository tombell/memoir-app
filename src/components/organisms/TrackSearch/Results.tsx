import { h } from "preact";

import Result from "components/organisms/TrackSearch/Result";

import { Track } from "services/memoir/types";

export interface Props {
  show: boolean;
  tracks?: Track[] | null;
  onResultClick: () => void;
}

export default ({ show, tracks, onResultClick }: Props) => {
  if (!tracks || !show) {
    return null;
  }

  return (
    <div class="absolute z-10 p-2.5 mt-2 w-full bg-gray-800 rounded border border-gray-700 border-solid box-border">
      <ul class="p-0 m-0">
        {tracks.map((track) => (
          <Result track={track} onClick={onResultClick} />
        ))}
      </ul>
    </div>
  );
};
