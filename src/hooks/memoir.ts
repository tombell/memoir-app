import { batch, useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

import request from "$services/memoir";
import type {
  Artwork,
  NewTracklist,
  Track,
  Tracklist,
} from "$services/memoir/types";

const useRequest = <TResponse>(url: string) => {
  const isLoading = useSignal(false);

  const perform = async (query: string): Promise<TResponse | null> => {
    try {
      isLoading.value = true;

      const resp = await request(url + query, "GET");
      const json = await resp.json();

      return json;
    } catch (err) {
      return null;
    } finally {
      isLoading.value = false;
    }
  };

  return { isLoading, perform };
};

const useFetch = <T>(url: string) => {
  const isLoading = useSignal(false);
  const data = useSignal<T | null>(null);
  const hasMore = useSignal(false);

  useEffect(() => {
    batch(async () => {
      isLoading.value = true;

      const resp = await request(url);
      const json = await resp.json();
      const current = resp.headers.get("Current-Page");
      const total = resp.headers.get("Total-Pages");

      data.value = json;

      if (current && total) {
        hasMore.value = parseInt(current, 10) < parseInt(total, 10);
      }

      isLoading.value = false;
    });
  }, [url, isLoading, data, hasMore]);

  return { isLoading, data, hasMore };
};

const usePerform = <TPayload, TResponse>(method: string, url: string) => {
  const isLoading = useSignal(false);

  const perform = async (body?: TPayload): Promise<TResponse | null> => {
    try {
      isLoading.value = true;

      const payload =
        body instanceof FormData ? body : JSON.stringify(body ?? {});
      const resp = await request(url, method, body ? payload : undefined);
      const json = await resp.json();

      return json;
    } catch (err) {
      return null;
    } finally {
      isLoading.value = false;
    }
  };

  return { isLoading, perform };
};

export const useTracklists = (page: number) =>
  useFetch<Tracklist[]>(`/tracklists?page=${page}`);

export const useTracklistsByTrack = (id: string, page: number) =>
  useFetch<Tracklist[]>(`/tracks/${id!}/tracklists?page=${page}`);

export const useTracklist = (id: string) =>
  useFetch<Tracklist>(`/tracklists/${id}`);

export const useMostPlayedTracks = () =>
  useFetch<Track[]>("/tracks/mostplayed");

export const usePostArtwork = () =>
  usePerform<FormData, Artwork>("POST", "/artwork");

export const usePostTracklist = () =>
  usePerform<NewTracklist, Tracklist>("POST", "/tracklists");

export const usePatchTracklist = (id: string) =>
  usePerform<Tracklist, Tracklist>("PATCH", `/tracklists/${id}`);

export const useSearchTracks = () => useRequest<Track[]>("/tracks/search?q=");
