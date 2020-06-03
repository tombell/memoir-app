import { h } from 'preact';
import { Router } from 'preact-router';

import API from 'memoir-api';

import AddTracklistPage from 'pages/AddTracklist';
import EditTracklistPage from 'pages/EditTracklist';
import MostPlayedTracksPage from 'pages/MostPlayedTracks';
import NotFoundPage from 'pages/NotFound';
import TracklistPage from 'pages/Tracklist';
import TracklistsByTrackPage from 'pages/TracklistsByTrack';
import TracklistsPage from 'pages/Tracklists';

import Header from 'components/Header';
import Redirect from 'components/Redirect';
import Search from 'components/Search';

export default () => {
  const api = new API(MEMOIR_API_URL, MEMOIR_API_KEY);

  return (
    <div class="app">
      <div class="app__column">
        <Header />
        <Search />
        <Router>
          <Redirect path="/" to="/tracklists/1" />
          <TracklistsPage path="/tracklists/:page" api={api} />
          {MEMOIR_ADMIN_ENABLED && [
            <AddTracklistPage path="/tracklists/add" api={api} />,
            <EditTracklistPage path="/tracklists/edit/:id" api={api} />,
          ]}
          <TracklistPage path="/tracklist/:id" api={api} />
          <TracklistsByTrackPage path="/track/:id/:page?" api={api} />
          <MostPlayedTracksPage path="/tracks/mostplayed" api={api} />
          <NotFoundPage default />
        </Router>
      </div>
    </div>
  );
};
