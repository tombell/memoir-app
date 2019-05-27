import { h } from 'preact';

import { Tracklist } from '../services/memoir/types';

import formatDate from '../utils/format-date';

import Tag from './Tag';

interface Props {
  tracklist: Tracklist;
}

export default ({ tracklist }: Props) => {
  return (
    <a class="tracklist-item-link" href={`/tracklist/${tracklist.id}`}>
      <div class="tracklist-item">
        <div class="tracklist-item-date">
          <span>{formatDate(tracklist.date)}</span>
        </div>

        <div class="tracklist-item-details">
          <h3 class="tracklist-item-name">{tracklist.name}</h3>

          <div class="tracklist-item-tracks">
            <Tag text={`${tracklist.trackCount} Tracks`} color="green" />
          </div>
        </div>
      </div>
    </a>
  );
};
