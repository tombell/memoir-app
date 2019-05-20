import { h } from 'preact';

import { Tracklist } from '../services/memoir/types';

import formatDate from '../utils/format-date';

import Tag from './Tag';

import styles from './TracklistItem.styles';

export default (props: { tracklist: Tracklist }) => {
  const { tracklist } = props;

  return (
    <div class={styles.item}>
      <div class={styles.date}>
        <span>{formatDate(tracklist.date)}</span>
      </div>

      <div class={styles.name}>
        <a class={styles.link} href={`/${tracklist.id}`}>
          {tracklist.name}
        </a>
      </div>

      <div class={styles.tracks}>
        <Tag label={`${tracklist.trackCount} Tracks`} />
      </div>
    </div>
  );
};
