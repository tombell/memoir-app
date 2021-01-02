import { h } from 'preact';

import { Track } from 'services/memoir';

import Tag from './Tag';

interface Props {
  track: Track;
}

export default ({ track }: Props) => (
  <div class="track-item">
    <div class="track-item__name">
      <a href={`/track/${track.id}`}>{`${track.artist} - ${track.name}`}</a>
    </div>

    <div class="track-item__tags">
      <Tag text={track.bpm.toFixed(2)} color="purple" />
      <Tag text={track.key} color="lilac" />
      <Tag text={track.genre} color="blue" />
    </div>
  </div>
);
