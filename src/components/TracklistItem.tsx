import { h } from 'preact';

import { Tracklist } from '../services/memoir/types';

import formatDate from '../utils/format-date';

import Tag from './Tag';

interface Props {
  tracklist: Tracklist;
}

export default ({ tracklist }: Props) => {
  return (
    <a href={`/tracklist/${tracklist.id}`}>
      <div class="tracklist-item">
        <div class="tracklist-item__details">
          <div class="tracklist-item__image">
            <img
              class="tracklist-item__artwork"
              alt={`${tracklist.name} Artwork`}
              src={`${MEMOIR_CDN}/${tracklist.artwork}`}
            />
          </div>

          <div class="tracklist-item__meta">
            <h3 class="tracklist-item__name">{tracklist.name}</h3>

            <div class="tracklist-item__tags">
              <Tag text={`${tracklist.trackCount} Tracks`} color="lilac" />
              <Tag text={formatDate(tracklist.date)} color="light-blue" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
