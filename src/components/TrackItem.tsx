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
    <div class={styles.track}>
      <div class={styles.trackNumberContainer}>
        <span class={styles.trackNumber}>#{trackNumber}</span>
      </div>

      <span class={styles.trackDetails}>
        {`${track.artist} - ${track.name}`}
      </span>

      <div class={styles.trackTags}>
        <Tag label={track.bpm} />
        <Tag label={track.genre} />
      </div>
    </div>
  );
};
