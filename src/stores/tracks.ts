import { type APIResponse, get } from "~/services/memoir";
import type { Track } from "~/services/memoir/types";

import { createFetcherStore, createMutatorStore } from "~/stores/fetcher";

export const createMostPlayedTracksStore = () => () =>
  createFetcherStore<APIResponse<Track[]>>(["/tracks/mostplayed"]);

export const createSearchTracksStore = () =>
  createMutatorStore<string>(async ({ data: query }) =>
    get<Track[]>(`/tracks/search?q=${query}`),
  );
