import Result from "components/TrackSearch/Result";

import { Track } from "services/memoir/types";

import "./Results.css";

export interface Props {
  show: boolean;
  tracks?: Track[] | null;
  onResultClick: () => void;
}

const Results = ({ show, tracks, onResultClick }: Props) => {
  if (!tracks || !show) {
    return null;
  }

  return (
    <div class="track-search-results">
      <ul class="track-search-results-list">
        {tracks.map((track) => (
          <Result track={track} onClick={onResultClick} />
        ))}
      </ul>
    </div>
  );
};

export default Results;
