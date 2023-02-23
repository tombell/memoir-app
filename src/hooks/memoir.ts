import useGetResource from "hooks/useGetResource";

import { Track, Tracklist } from "services/memoir/types";

export const useTracklists = (page: number) =>
  useGetResource<Tracklist[]>(`/tracklists?page=${page}`);

export const useTracklistsByTrack = (id: string, page: number) =>
  useGetResource<Tracklist[]>(`/tracks/${id!}/tracklists?page=${page}`);

export const useTracklist = (id: string) =>
  useGetResource<Tracklist>(`/tracklists/${id}`);

export const useMostPlayedTracks = () =>
  useGetResource<Track[]>("/tracks/mostplayed");
