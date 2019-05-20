import { h } from 'preact';

import { Tracklist } from '../services/memoir/types';

import formatDate from '../utils/format-date';

import Tag from './Tag';

import styles from './TracklistItem.styles';

export default (props: { tracklist: Tracklist }) => {
  const { tracklist } = props;

  return (
    <div class={styles.tracklist}>
      <div class={styles.date}>
        <Tag label={formatDate(tracklist.date)} />
      </div>

      <h3 class={styles.name}>
        <a class={styles.link} href={`/${tracklist.id}`}>
          {tracklist.name}
        </a>
      </h3>
    </div>
  );
};
