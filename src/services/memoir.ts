/* global MEMOIR_API_URL */

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
  return resp.json();
}

export async function fetchTracklists() {
  try {
    const tracklists: Tracklist[] = await apiRequest('/tracklists');
    return tracklists;
  } catch {
    return null;
  }
}

export async function fetchTracklist(id: string) {
  try {
    const tracklist: Tracklist = await apiRequest(`/trackists/${id}`);
    return tracklist;
  } catch {
    return null;
  }
}
