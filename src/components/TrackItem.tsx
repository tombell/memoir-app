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

      <span class="track-item-details">
        {`${track.artist} - ${track.name}`}
      </span>

      <div class="track-item-tags">
        <Tag label={track.genre} />
        <Tag label={track.bpm} />
      </div>
    </div>
  );
};
