import { computed } from "nanostores";

import { type APIResponse, patch } from "~/services/memoir";
import type { Tracklist } from "~/services/memoir/types";

import { createFetcherStore, createMutatorStore } from "~/stores/fetcher";
import { $router } from "~/stores/router";

const $routeParams = computed($router, (page) => ({
  tracklistsPage:
    page?.route === "tracklistsIndex" ? page.search.page || "1" : undefined,
  currentTracklistId:
    page?.route === "tracklistsShow" || page?.route === "tracklistsEdit"
      ? page.params.id
      : undefined,
  tracklistsByTrackId:
    page?.route === "tracklistsByTrack" ? page.params.id : undefined,
  tracklistsByTrackPage:
    page?.route === "tracklistsByTrack" ? page.search.page || "1" : undefined,
  currentPath: page?.path ?? "",
}));

export const $tracklistsPage = computed(
  $routeParams,
  (params) => params.tracklistsPage,
);

export const $currentTracklistId = computed(
  $routeParams,
  (params) => params.currentTracklistId,
);

export const $tracklistsByTrackId = computed(
  $routeParams,
  (params) => params.tracklistsByTrackId,
);

export const $tracklistsByTrackPage = computed(
  $routeParams,
  (params) => params.tracklistsByTrackPage,
);

export const $currentPath = computed(
  $routeParams,
  (params) => params.currentPath,
);

export const $tracklists = createFetcherStore<APIResponse<Tracklist[]>>([
  "/tracklists?page=",
  $tracklistsPage,
]);

export const $tracklist = createFetcherStore<APIResponse<Tracklist>>([
  "/tracklists/",
  $currentTracklistId,
]);

export const $tracklistsByTrack = createFetcherStore<APIResponse<Tracklist[]>>([
  "/tracks/",
  $tracklistsByTrackId,
  "/tracklists?page=",
  $tracklistsByTrackPage,
]);

export const $updateTracklist = createMutatorStore<Tracklist>(
  async ({ data: tracklist, revalidate }) => {
    revalidate(`/tracklists/${tracklist.id}`);
    return patch<Tracklist>(`/tracklists/${tracklist.id}`, tracklist);
  },
);
