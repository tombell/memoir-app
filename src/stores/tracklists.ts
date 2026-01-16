import { computed } from "nanostores";

import { type APIResponse, patch } from "~/services/memoir";
import type { Tracklist } from "~/services/memoir/types";

import { createFetcherStore, createMutatorStore } from "~/stores/fetcher";
import { $router } from "~/stores/router";

// Computed atoms derived from router state
export const $tracklistsPage = computed($router, (page) => {
  if (page?.route === "tracklistsIndex") {
    return page.search.page || "1";
  }
  return undefined;
});

export const $currentTracklistId = computed($router, (page) => {
  if (page?.route === "tracklistsShow" || page?.route === "tracklistsEdit") {
    return page.params.id;
  }
  return undefined;
});

export const $tracklistsByTrackId = computed($router, (page) => {
  if (page?.route === "tracklistsByTrack") {
    return page.params.id;
  }
  return undefined;
});

export const $tracklistsByTrackPage = computed($router, (page) => {
  if (page?.route === "tracklistsByTrack") {
    return page.search.page || "1";
  }
  return undefined;
});

export const $currentPath = computed($router, (page) => page?.path || "");

// Singleton fetcher stores
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

// Mutator stores
export const $updateTracklist = createMutatorStore<Tracklist>(
  async ({ data: tracklist, revalidate }) => {
    revalidate(`/tracklists/${tracklist.id}`);
    return patch<Tracklist>(`/tracklists/${tracklist.id}`, tracklist);
  },
);
