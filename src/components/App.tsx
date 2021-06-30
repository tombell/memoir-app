import { h } from "preact";
import { Router } from "preact-router";

import CenterColumn from "components/layouts/CenterColumn";

import Footer from "components/Footer";
import Header from "components/Header";
import Redirect from "components/Redirect";

import TrackSearch from "components/organisms/TrackSearch";

import TracklistsAdd from "pages/Tracklists/Add";
import TracklistsEdit from "pages/Tracklists/Edit";
import TracklistsIndex from "pages/Tracklists/Index";
import TracklistsShow from "pages/Tracklists/Show";

import MostPlayedTracksPage from "pages/MostPlayedTracks";
import NotFoundPage from "pages/NotFound";
import TracklistsByTrackPage from "pages/TracklistsByTrack";

export default () => (
  <CenterColumn>
    <Header center />
    <TrackSearch />
    <Router>
      <Redirect path="/" to="/tracklists/1" />

      <TracklistsIndex path="/tracklists/:page" />
      {MEMOIR_ADMIN_ENABLED && <TracklistsAdd path="/tracklists/add" />}
      {MEMOIR_ADMIN_ENABLED && <TracklistsEdit path="/tracklists/edit/:id" />}
      <TracklistsShow path="/tracklist/:id" />

      <TracklistsByTrackPage path="/track/:id/:page?" />
      <MostPlayedTracksPage path="/tracks/mostplayed" />

      <NotFoundPage path="/404" default />
    </Router>
    <Footer />
  </CenterColumn>
);
