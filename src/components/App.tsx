import { h } from 'preact';
import { Router } from 'preact-router';

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

export default () => (
  <div class="app">
    <div class="app__column">
      <Header />
      <Search />
      <Router>
        <Redirect path="/" to="/tracklists/1" />
        <TracklistsPage path="/tracklists/:page" />
        {MEMOIR_ADMIN_ENABLED && [
          <AddTracklistPage path="/tracklists/add" />,
          <EditTracklistPage path="/tracklists/edit/:id" />,
        ]}
        <TracklistPage path="/tracklist/:id" />
        <TracklistsByTrackPage path="/track/:id/:page?" />
        <MostPlayedTracksPage path="/tracks/mostplayed" />
        <NotFoundPage default />
      </Router>
    </div>
  </div>
);
