import { h } from 'preact';

import { Track } from '../services/memoir/types';

import Tag from './Tag';

import styles from './TrackItem.styles';

interface Props {
  trackNumber: number;
  track: Track;
}

export default (props: Props) => {
  const { trackNumber, track } = props;

  return (
    <div class={styles.container}>
      <div class={styles.number}>
        <span>#{trackNumber}</span>
      </div>

      <span class={styles.details}>
        {`${track.artist} - ${track.name}`}
      </span>

      <div class={styles.tags}>
        <Tag label={track.genre} />
        <Tag label={track.bpm} />
      </div>
    </div>
  );
};
