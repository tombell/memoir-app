import { Router } from "preact-router";

import Main from "~/layouts/Main";

import MostPlayedTracksPage from "~/pages/MostPlayedTracks";
import NotFoundPage from "~/pages/NotFound";
import TracklistsAdd from "~/pages/Tracklists/Add";
import TracklistsEdit from "~/pages/Tracklists/Edit";
import TracklistsIndex from "~/pages/Tracklists/Index";
import TracklistsShow from "~/pages/Tracklists/Show";
import TracklistsByTrackPage from "~/pages/TracklistsByTrack";

import Redirect from "~/components/Redirect";

export default function App() {
  return (
    <Main>
      <Router>
        <Redirect path="/" to="/tracklists" />

        <TracklistsIndex path="/tracklists" />
        {import.meta.env.VITE_MEMOIR_ADMIN_ENABLED && (
          <TracklistsAdd path="/tracklists/add" />
        )}

        <TracklistsShow path="/tracklist/:id" />
        {import.meta.env.VITE_MEMOIR_ADMIN_ENABLED && (
          <TracklistsEdit path="/tracklist/:id/edit" />
        )}

        <TracklistsByTrackPage path="/tracks/:id" />
        <MostPlayedTracksPage path="/tracks/mostplayed" />

        <NotFoundPage path="/404" default />
      </Router>
    </Main>
  );
}
