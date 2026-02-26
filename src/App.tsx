import { useStore } from "@nanostores/preact";
import { redirectPage } from "@nanostores/router";
import { useCallback } from "preact/hooks";

import Main from "~/layouts/main";

import MostPlayedTracks from "~/pages/most-played-tracks";
import NotFoundPage from "~/pages/not-found";
import TracklistAdd from "~/pages/tracklists/add";
import TracklistsByTrack from "~/pages/tracklists/by-track";
import TracklistsEdit from "~/pages/tracklists/edit";
import TracklistsIndex from "~/pages/tracklists/index";
import TracklistsShow from "~/pages/tracklists/show";

import { $router } from "~/stores/router";

const isAdminEnabled = !!process.env.PUBLIC_MEMOIR_ADMIN_ENABLED;

export default function App() {
  const page = useStore($router);

  const renderPage = useCallback(() => {
    if (!page) {
      return <NotFoundPage />;
    }

    switch (page.route) {
      case "root":
        redirectPage($router, "tracklistsIndex");
        return null;
      case "tracklistsIndex":
        return <TracklistsIndex />;
      case "tracklistsAdd":
        return isAdminEnabled ? <TracklistAdd /> : <NotFoundPage />;
      case "tracklistsShow":
        return <TracklistsShow />;
      case "tracklistsEdit":
        return isAdminEnabled ? <TracklistsEdit /> : <NotFoundPage />;
      case "tracklistsByTrack":
        return <TracklistsByTrack />;
      case "mostPlayedTracks":
        return <MostPlayedTracks />;
      default:
        return <NotFoundPage />;
    }
  }, [page]);

  return <Main>{renderPage()}</Main>;
}
