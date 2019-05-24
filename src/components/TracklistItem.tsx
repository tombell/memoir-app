import { h } from 'preact';

import { Tracklist } from '../services/memoir/types';

import formatDate from '../utils/format-date';

import Tag from './Tag';

export default (props: { tracklist: Tracklist }) => {
  const { tracklist } = props;

  return (
    <a class="tracklist-item-link" href={`/${tracklist.id}`}>
      <div class="tracklist-item">
        <div class="tracklist-item-date">
          <span>{formatDate(tracklist.date)}</span>
        </div>

        <div class="tracklist-item-details">
          <h3 class="tracklist-item-name">{tracklist.name}</h3>

          <div class="tracklist-item-tracks">
            <Tag label={`${tracklist.trackCount} Tracks`} />
          </div>
        </div>
      </div>
    </a>
  );
};
