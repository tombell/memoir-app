import { type APIResponse, get } from "~/services/memoir";
import type { Track } from "~/services/memoir/types";

import { createFetcherStore, createMutatorStore } from "~/stores/fetcher";

// Singleton fetcher store - static key, no dependencies
export const $mostPlayedTracks = createFetcherStore<APIResponse<Track[]>>([
  "/tracks/mostplayed",
]);

// Singleton mutator for search (no caching, always fresh)
export const $searchTracks = createMutatorStore<string>(
  async ({ data: query }) => get<Track[]>(`/tracks/search?q=${query}`),
  { throttleCalls: false },
);
