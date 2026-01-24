import { useStore } from "@nanostores/preact";
import { redirectPage } from "@nanostores/router";
import { useCallback } from "preact/hooks";

import Main from "~/layouts/Main";

import MostPlayedTracks from "~/pages/MostPlayedTracks";
import NotFoundPage from "~/pages/NotFound";
import TracklistAdd from "~/pages/Tracklists/Add";
import TracklistsByTrack from "~/pages/Tracklists/ByTrack";
import TracklistsEdit from "~/pages/Tracklists/Edit";
import TracklistsIndex from "~/pages/Tracklists/Index";
import TracklistsShow from "~/pages/Tracklists/Show";

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
