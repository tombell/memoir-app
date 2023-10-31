import { batch, useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

import { request } from "services/memoir";
import { Artwork, Track, Tracklist } from "services/memoir/types";

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

export const useTracklists = (page: number) =>
  useFetch<Tracklist[]>(`/tracklists?page=${page}`);

export const useTracklistsByTrack = (id: string, page: number) =>
  useFetch<Tracklist[]>(`/tracks/${id!}/tracklists?page=${page}`);

export const useTracklist = (id: string) =>
  useFetch<Tracklist>(`/tracklists/${id}`);

export const useMostPlayedTracks = () =>
  useFetch<Track[]>("/tracks/mostplayed");

export const usePostFetch = <T>(url: string) => {
  const isLoading = useSignal(false);

  const perform = async (body?: T | FormData): Promise<T | null> => {
    try {
      const payload =
        body instanceof FormData ? body : JSON.stringify(body ?? {});
      const resp = await request(url, "POST", payload);
      const json = await resp.json();
      return json;
    } catch {
      return null;
    }
  };

  return { isLoading, perform };
};

export const usePostArtwork = () => usePostFetch<Artwork>("/artwork");
