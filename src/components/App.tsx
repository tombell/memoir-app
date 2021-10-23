import { h } from "preact";
import { Router } from "preact-router";

import MostPlayedTracksPage from "pages/MostPlayedTracks";
import NotFoundPage from "pages/NotFound";
import TracklistsAdd from "pages/Tracklists/Add";
import TracklistsEdit from "pages/Tracklists/Edit";
import TracklistsIndex from "pages/Tracklists/Index";
import TracklistsShow from "pages/Tracklists/Show";
import TracklistsByTrackPage from "pages/TracklistsByTrack";

import Footer from "components/organisms/Footer";
import Header from "components/organisms/Header";
import TrackSearch from "components/organisms/TrackSearch";

import Redirect from "components/Redirect";

import "./App.css";

export default () => (
  <div class="containr mx-auto px-96">
    <div class="flex justify-center my-4">
      <Header />
    </div>

    <div class="mb-8">
      <TrackSearch />
    </div>

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
  </div>
);
