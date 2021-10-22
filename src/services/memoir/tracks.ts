import { request } from "services/memoir";
import { Track } from "services/memoir/types";

export const fetchMostPlayedTracks = async (): Promise<Track[] | null> => {
  try {
    const resp = await request("/tracks/mostplayed");
    return await resp.json();
  } catch {
    return null;
  }
};

export const searchTracks = async (
  query: string
): Promise<Track[] | null> => {
  try {
    const resp = await request(`/tracks/search?q=${query}`);
    return await resp.json();
  } catch {
    return null;
  }
};
