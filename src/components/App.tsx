import { h } from "preact";
import { Router } from "preact-router";

import MostPlayedTracksPage from "pages/MostPlayedTracks";
import NotFoundPage from "pages/NotFound";
import TracklistsAdd from "pages/Tracklists/Add";
import TracklistsEdit from "pages/Tracklists/Edit";
import TracklistsIndex from "pages/Tracklists/Index";
import TracklistsShow from "pages/Tracklists/Show";
import TracklistsByTrackPage from "pages/TracklistsByTrack";

import Header from "components/molecules/Header";

import Footer from "components/organisms/Footer";
import TrackSearch from "components/organisms/TrackSearch";

import Redirect from "components/Redirect";

import CenterColumn from "components/layouts/CenterColumn";

export default () => (
  <CenterColumn>
    <div class="my-4">
      <Header center />
    </div>

    <TrackSearch />

    <Router>
      <Redirect path="/" to="/tracklists/1" />

      <TracklistsIndex path="/tracklists/:page" />
      {MEMOIR_ADMIN_ENABLED && <TracklistsAdd path="/tracklists/add" />}
      {MEMOIR_ADMIN_ENABLED && <TracklistsEdit path="/tracklists/edit/:id" />}
      <TracklistsShow path="/tracklist/:id" />

      <TracklistsByTrackPage path="/tracks/:id/:page?" />
      <MostPlayedTracksPage path="/tracks/mostplayed" />

      <NotFoundPage path="/404" default />
    </Router>

    <div class="mb-4">
      <Footer />
    </div>
  </CenterColumn>
);
