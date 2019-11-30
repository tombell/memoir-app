/* global MEMOIR_API_URL */

import { Track, Tracklist, PagedTracks, PagedTracklists } from './types';

const URL = MEMOIR_API_URL;

export async function apiRequest(endpoint: string) {
  // TODO: add handling of 404 and 500
  const resp = await fetch(`${URL}${endpoint}`);
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
