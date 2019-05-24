import { h } from 'preact';

import { Track } from '../services/memoir/types';

import Tag from './Tag';

interface Props {
  trackNumber: number;
  track: Track;
}

export default (props: Props) => {
  const { trackNumber, track } = props;

  return (
    <div class="track-item">
      <div class="track-item-number">
        <span>{`#${trackNumber}`}</span>
      </div>

      <div class="track-item-details">
        <div class="track-item-name">
          <a href={`/track/${track.id}`}>{`${track.artist} - ${track.name}`}</a>
        </div>

        <div class="track-item-tags">
          <Tag label={track.bpm.toFixed(2)} />
          <Tag label={track.genre} />
        </div>
      </div>
    </div>
  );
};
