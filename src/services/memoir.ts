export interface Track {
  id: string;
  artist: string;
  name: string;
  genre: string;
  bpm: number;
  key: string;
  artist_highlighted: string;
  name_highlighted: string;
}

export interface Tracklist {
  id: string;
  name: string;
  date: string;
  artwork: string;
  url: string;
  trackCount: number;
  tracks?: Track[];
}

export interface PagedTracks {
  tracks: Track[] | null;
  hasMore: boolean;
}

export interface PagedTracklists {
  track?: Track;
  tracklists: Tracklist[] | null;
  hasMore: boolean;
}

export async function apiRequest(endpoint: string) {
  const resp = await fetch(`${MEMOIR_API_URL}${endpoint}`);
  return resp.json();
}

export async function fetchTracklists(page: number = 1) {
  try {
    const url = `/tracklists?page=${page}`;
    const tracklists: PagedTracklists = await apiRequest(url);
    return tracklists;
  } catch {
    return null;
  }
}

export async function fetchTracklist(id: string) {
  try {
    const tracklist: Tracklist = await apiRequest(`/tracklists/${id}`);
    return tracklist;
  } catch {
    return null;
  }
}

export async function fetchTracklistsByTrack(id: string, page: number = 1) {
  try {
    const url = `/tracks/${id}/tracklists?page=${page}`;
    const tracklists: PagedTracklists = await apiRequest(url);
    return tracklists;
  } catch {
    return null;
  }
}

export async function fetchMostPlayedTracks() {
  try {
    const tracks: Track[] = await apiRequest('/tracks/mostplayed');
    return tracks;
  } catch {
    return null;
  }
}

export async function searchTracks(query: string) {
  try {
    const url = `/tracks/search?q=${query}`;
    const tracks: PagedTracks = await apiRequest(url);
    return tracks;
  } catch {
    return null;
  }
}