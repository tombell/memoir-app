const URL = MEMOIR_API_URL;

export interface Track {
  id: string;
  artist: string;
  name: string;
  genre: string;
  bpm: number;
  key: string;
}

export interface Tracklist {
  id: string;
  name: string;
  date: string;
  tracks?: Track[];
}

export async function apiRequest(endpoint: string) {
  const resp = await fetch(`${URL}${endpoint}`);
  return await resp.json();
}
