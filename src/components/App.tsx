import { Router } from "preact-router";

import MostPlayedTracksPage from "$/pages/MostPlayedTracks";
import NotFoundPage from "$/pages/NotFound";
import TracklistsAdd from "$/pages/Tracklists/Add";
import TracklistsEdit from "$/pages/Tracklists/Edit";
import TracklistsIndex from "$/pages/Tracklists/Index";
import TracklistsShow from "$/pages/Tracklists/Show";
import TracklistsByTrackPage from "$/pages/TracklistsByTrack";

import Footer from "$/components/Footer";
import Header from "$/components/Header";
import Redirect from "$/components/Redirect";
import TrackSearch from "$/components/TrackSearch";

function App() {
  return (
    <div class="container mx-auto px-96">
      <div class="my-4 flex justify-center">
        <Header />
      </div>

      <div class="mb-8">
        <TrackSearch />
      </div>

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

      <div class="my-8">
        <Footer />
      </div>
    </div>
  );
}

export default App;
