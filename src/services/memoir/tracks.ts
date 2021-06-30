import { request } from "services/memoir";
import { PagedTracks, Track } from "services/memoir/types";

export const fetchMostPlayedTracks = async (): Promise<Track[] | null> => {
  try {
    return await request("/tracks/mostplayed");
  } catch {
    return null;
  }
};

export const searchTracks = async (
  query: string
): Promise<PagedTracks | null> => {
  try {
    return await request(`/tracks/search?q=${query}`);
  } catch {
    return null;
  }
};
