import { h } from 'preact';
import { Router } from 'preact-router';

import {
  FetchTracklists,
  FetchTracklist,
  FetchTracklistsByTrack,
  FetchMostPlayedTracks,
} from '../services/memoir/types';

import AboutPage from '../pages/About';
import MostPlayedTracksPage from '../pages/MostPlayedTracks';
import NotFoundPage from '../pages/NotFound';
import TracklistPage from '../pages/Tracklist';
import TracklistsByTrackPage from '../pages/TracklistsByTrack';
import TracklistsPage from '../pages/Tracklists';

import Header from './Header';
import Redirect from './Redirect';

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
          <Redirect path="/" to="/tracklists/1" />
          <TracklistsPage
            path="/tracklists/:page"
            fetchTracklists={fetchTracklists}
          />
          <TracklistPage
            path="/tracklist/:id"
            fetchTracklist={fetchTracklist}
          />
          <TracklistsByTrackPage
            path="/track/:id/:page?"
            fetchTracklistsByTrack={fetchTracklistsByTrack}
          />
          <MostPlayedTracksPage
            path="/tracks/mostplayed"
            fetchMostPlayedTracks={fetchMostPlayedTracks}
          />
          <AboutPage path="/about" />
          <NotFoundPage default />
        </Router>
      </div>
    </div>
  );
};
