/* global MEMOIR_API_URL */

import { Tracklist } from './types';

const URL = MEMOIR_API_URL;

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
    const tracklist: Tracklist = await apiRequest(`/tracklists/${id}`);
    return tracklist;
  } catch {
    return null;
  }
}

export async function fetchTracklistsByTrackId(id: string) {
  try {
    const tracklists: Tracklist[] = await apiRequest(`/tracks/${id}/tracklists`);
    return tracklists;
  } catch {
    return null;
  }
}
