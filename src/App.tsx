import { useStore } from "@nanostores/preact";
import { redirectPage } from "@nanostores/router";
import { useCallback } from "preact/hooks";

import Main from "~/layouts/Main";

import MostPlayedTracks from "~/pages/MostPlayedTracks";
import NotFoundPage from "~/pages/NotFound";
import TracklistAdd from "~/pages/Tracklists/Add";
import TracklistsEdit from "~/pages/Tracklists/Edit";
import TracklistsIndex from "~/pages/Tracklists/Index";
import TracklistsShow from "~/pages/Tracklists/Show";
import TracklistsByTrack from "~/pages/TracklistsByTrack";

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
        return <TracklistsIndex page={page.search.page} path={page.path} />;
      case "tracklistsAdd":
        return isAdminEnabled ? <TracklistAdd /> : <NotFoundPage />;
      case "tracklistsShow":
        return <TracklistsShow id={page.params.id} />;
      case "tracklistsEdit":
        return isAdminEnabled ? (
          <TracklistsEdit id={page.params.id} />
        ) : (
          <NotFoundPage />
        );
      case "tracklistsByTrack":
        return (
          <TracklistsByTrack
            id={page.params.id}
            page={page.search.page}
            path={page.path}
          />
        );
      case "mostPlayedTracks":
        return <MostPlayedTracks />;
      default:
        return <NotFoundPage />;
    }
  }, [page]);

  return <Main>{renderPage()}</Main>;
}
