import {
  NewTracklist,
  PagedTracklists,
  Tracklist,
} from "services/memoir/types";
import { request } from "services/memoir";

export const fetchTracklist = async (id: string): Promise<Tracklist | null> => {
  try {
    return await request(`/tracklists/${id}`);
  } catch {
    return null;
  }
};

export const postTracklist = async (
  tracklist: NewTracklist
): Promise<Tracklist | null> => {
  try {
    const data = JSON.stringify(tracklist);
    return await request("/tracklists", "POST", data);
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
    return await request(`/tracklists/${id}`, "PATCH", data);
  } catch {
    return null;
  }
};

export const fetchTracklists = async (
  page: number = 1
): Promise<PagedTracklists | null> => {
  try {
    return await request(`/tracklists?page=${page}`);
  } catch {
    return null;
  }
};

export const fetchTracklistsByTrack = async (
  id: string,
  page: number = 1
): Promise<PagedTracklists | null> => {
  try {
    return await request(`/tracks/${id}/tracklists?page=${page}`);
  } catch {
    return null;
  }
};
