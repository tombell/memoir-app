import { h } from "preact";
import { Router } from "preact-router";

import API from "services/memoir";

import TracklistsIndex from "pages/Tracklists/Index";
import TracklistsShow from "pages/Tracklists/Show";
import TracklistsAdd from "pages/Tracklists/Add";
import TracklistsEdit from "pages/Tracklists/Edit";

import MostPlayedTracksPage from "pages/MostPlayedTracks";
import TracklistsByTrackPage from "pages/TracklistsByTrack";

import NotFoundPage from "pages/NotFound";

import Header from "components/Header";
import Redirect from "components/Redirect";
import Search from "components/Search";

export default () => {
  const api = new API(MEMOIR_API_URL, MEMOIR_API_KEY);

  return (
    <div class="app">
      <div class="app__column">
        <Header />
        <Search />
        <Router>
          <Redirect path="/" to="/tracklists/1" />

          <TracklistsIndex path="/tracklists/:page" api={api} />
          {MEMOIR_ADMIN_ENABLED && [
            <TracklistsAdd path="/tracklists/add" api={api} />,
            <TracklistsEdit path="/tracklists/edit/:id" api={api} />,
          ]}
          <TracklistsShow path="/tracklist/:id" api={api} />

          <TracklistsByTrackPage path="/track/:id/:page?" api={api} />
          <MostPlayedTracksPage path="/tracks/mostplayed" api={api} />

          <NotFoundPage path="/404" default />
        </Router>
      </div>
    </div>
  );
};
