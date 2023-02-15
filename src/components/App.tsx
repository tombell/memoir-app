import { Router } from "preact-router";

import MostPlayedTracksPage from "pages/MostPlayedTracks";
import NotFoundPage from "pages/NotFound";
import TracklistsAdd from "pages/Tracklists/Add";
import TracklistsEdit from "pages/Tracklists/Edit";
import TracklistsIndex from "pages/Tracklists/Index";
import TracklistsShow from "pages/Tracklists/Show";
import TracklistsByTrackPage from "pages/TracklistsByTrack";

import Footer from "components/Footer";
import Header from "components/Header";
import Redirect from "components/Redirect";
import TrackSearch from "components/TrackSearch";

import "./App.css";

const App = () => (
  <div class="container px-96 mx-auto">
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

    <div class="my-8">
      <Footer />
    </div>
  </div>
);

export default App;
