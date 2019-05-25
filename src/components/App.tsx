import { h } from 'preact';
import { Router } from 'preact-router';

import {
  FetchTracklists,
  FetchTracklist,
  FetchTracklistsByTrack,
  FetchMostPlayedTracks,
} from '../services/memoir/types';

import MostPlayedPage from '../pages/MostPlayed';
import TracklistPage from '../pages/Tracklist';
import TracklistsByTrack from '../pages/TracklistsByTrack';
import TracklistsPage from '../pages/Tracklists';

import Header from './Header';

interface Props {
  fetchTracklists: FetchTracklists;
  fetchTracklist: FetchTracklist;
  fetchTracklistsByTrack: FetchTracklistsByTrack;
  fetchMostPlayedTracks: FetchMostPlayedTracks;
}

export default (props: Props) => {
  const {
    fetchTracklist,
    fetchTracklists,
    fetchTracklistsByTrack,
    fetchMostPlayedTracks,
  } = props;

  return (
    <div class="page-container">
      <div class="page-column">
        <Header />
        <Router>
          <TracklistsPage path="/" fetchTracklists={fetchTracklists} />
          <TracklistPage path="/:id" fetchTracklist={fetchTracklist} />
          <TracklistsByTrack
            path="/track/:id"
            fetchTracklistsByTrack={fetchTracklistsByTrack}
          />
          <MostPlayedPage
            path="/tracks/mostplayed"
            fetchMostPlayedTracks={fetchMostPlayedTracks}
          />
        </Router>
      </div>
    </div>
  );
};
