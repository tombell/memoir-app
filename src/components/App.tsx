import { css } from "g-style";
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

import TrackSearch from "components/organisms/TrackSearch";

import Footer from "components/Footer";
import Redirect from "components/Redirect";

import CenterColumn from "components/layouts/CenterColumn";

const headerClassName = css({
  margin: "1rem 0",
});

export default () => (
  <CenterColumn>
    <div class={headerClassName}>
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
    <Footer />
  </CenterColumn>
);
