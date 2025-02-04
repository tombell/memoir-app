import { createRouter } from "@nanostores/router";

export const $router = createRouter({
  root: "/",

  tracklistsIndex: "/tracklists",
  tracklistsAdd: "/tracklists/add",
  tracklistsShow: "/tracklist/:id",
  tracklistsEdit: "/tracklist/:id/edit",

  mostPlayedTracks: "/tracks/mostplayed",
  tracklistsByTrack: "/tracks/:id",
});
