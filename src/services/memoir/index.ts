import { Artwork, NewTracklist, Track, Tracklist } from "services/memoir/types";

export const request = async (
  endpoint: string,
  method = "GET",
  body: FormData | string | null = null
) => {
  const headers: any = {};

  if (MEMOIR_API_KEY) {
    headers["API-Write-Key"] = MEMOIR_API_KEY;
  }

  return fetch(`${MEMOIR_API_URL}${endpoint}`, { method, body, headers });
};

export const postTracklist = async (
  tracklist: NewTracklist
): Promise<Tracklist | null> => {
  try {
    const data = JSON.stringify(tracklist);
    const resp = await request("/tracklists", "POST", data);
    const json = await resp.json();
    return json;
  } catch {
    return null;
  }
};

export const patchTracklist = async (
  id: string,
  tracklist: Tracklist
): Promise<Tracklist | null> => {
  try {
    const { name, date, url } = tracklist;
    const data = JSON.stringify({ name, date, url });
    const resp = await request(`/tracklists/${id}`, "PATCH", data);
    const json = await resp.json();
    return json;
  } catch {
    return null;
  }
};

export const searchTracks = async (query: string): Promise<Track[] | null> => {
  try {
    const resp = await request(`/tracks/search?q=${query}`);
    const json = await resp.json();
    return json;
  } catch {
    return null;
  }
};

export const uploadArtwork = async (file: File): Promise<Artwork | null> => {
  try {
    const data = new FormData();
    data.append("artwork", file);
    const resp = await request("/artwork", "POST", data);
    const json = await resp.json();
    return json;
  } catch {
    return null;
  }
};
