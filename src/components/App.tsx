import { h } from "preact";
import { Router } from "preact-router";

import CenterColumn from "components/layouts/CenterColumn";

import Header from "components/Header";
import Redirect from "components/Redirect";
import Search from "components/Search";

import TracklistsAdd from "pages/Tracklists/Add";
import TracklistsEdit from "pages/Tracklists/Edit";
import TracklistsIndex from "pages/Tracklists/Index";
import TracklistsShow from "pages/Tracklists/Show";

import MostPlayedTracksPage from "pages/MostPlayedTracks";
import NotFoundPage from "pages/NotFound";
import TracklistsByTrackPage from "pages/TracklistsByTrack";

import API from "services/memoir";

export default () => {
  const api = new API(MEMOIR_API_KEY);

  return (
    <CenterColumn>
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
    </CenterColumn>
  );
};
