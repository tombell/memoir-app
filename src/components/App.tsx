import { h } from 'preact';
import { Router } from 'preact-router';

import { FetchTracklists, FetchTracklist, FetchTracklistsByTrackId } from '../services/memoir/types';

import TracklistsPage from '../pages/Tracklists';
import TracklistPage from '../pages/Tracklist';
import TracklistsByTrack from '../pages/TracklistsByTrack';

import Header from './Header';

interface Props {
  fetchTracklists: FetchTracklists;
  fetchTracklist: FetchTracklist;
  fetchTracklistsByTrackId: FetchTracklistsByTrackId;
}

export default (props: Props) => {
  const { fetchTracklist, fetchTracklists, fetchTracklistsByTrackId } = props;

  return (
    <div class="page-container">
      <div class="page-column">
        <Header />
        <Router>
          <TracklistsPage path="/" fetchTracklists={fetchTracklists} />
          <TracklistPage path="/:id" fetchTracklist={fetchTracklist} />
          <TracklistsByTrack path="/track/:id" fetchTracklistsByTrackId={fetchTracklistsByTrackId} />
        </Router>
      </div>
    </div>
  );
};
