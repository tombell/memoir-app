import { atom } from "nanostores";

import { type APIResponse, patch, post } from "~/services/memoir";
import type { NewTracklist, Tracklist } from "~/services/memoir/types";

import { createFetcherStore, createMutatorStore } from "~/stores/fetcher";

export const createTracklistsStore = (page: string) => () =>
  createFetcherStore<APIResponse<Tracklist[]>>([
    "/tracklists",
    `?page=${page}`,
  ]);

export const createTracklistStore = (id: string | undefined) => () =>
  createFetcherStore<APIResponse<Tracklist>>(["/tracklists/", atom(id)]);

export const createAddTracklistStore = () => () =>
  createMutatorStore<NewTracklist>(async ({ data: tracklist, revalidate }) => {
    revalidate("/tracklists");
    return post<NewTracklist>("/tracklists", tracklist);
  });

export const createUpdateTracklistStore = (id: string | undefined) => () =>
  createMutatorStore<Tracklist>(async ({ data: tracklist, revalidate }) => {
    revalidate(`/tracklists/${id}`);
    return patch<Tracklist>(`/tracklists/${id}`, tracklist);
  });

export const createTracklistsByTrackStore =
  (id: string | undefined, page: string) => () =>
    createFetcherStore<APIResponse<Tracklist[]>>([
      "/tracks/",
      atom(id),
      "/tracklists",
      `?page=${page}`,
    ]);
