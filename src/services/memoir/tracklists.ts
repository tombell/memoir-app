import { request } from "services/memoir";
import { NewTracklist, Tracklist } from "services/memoir/types";

export const fetchTracklist = async (id: string): Promise<Tracklist | null> => {
  try {
    const resp = await request(`/tracklists/${id}`);
    return await resp.json();
  } catch {
    return null;
  }
};

export const postTracklist = async (
  tracklist: NewTracklist
): Promise<Tracklist | null> => {
  try {
    const data = JSON.stringify(tracklist);
    const resp = await request("/tracklists", "POST", data);
    return await resp.json();
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
    return await resp.json();
  } catch {
    return null;
  }
};

export const fetchTracklists = async (
  page: number = 1
): Promise<[Tracklist[] | null, boolean]> => {
  try {
    const resp = await request(`/tracklists?page=${page}`);
    const body = await resp.json();

    const current = resp.headers.get("Current-Page");
    const total = resp.headers.get("Total-Pages");

    return [body, parseInt(current!, 10) <= parseInt(total!, 10)];
  } catch {
    return [null, false];
  }
};

export const fetchTracklistsByTrack = async (
  id: string,
  page: number = 1
): Promise<[Tracklist[] | null, boolean]> => {
  try {
    const resp = await request(`/tracks/${id}/tracklists?page=${page}`);
    const body = await resp.json();

    const current = resp.headers.get("Current-Page");
    const total = resp.headers.get("Total-Pages");

    return [body, parseInt(current!, 10) <= parseInt(total!, 10)];
  } catch {
    return [null, false];
  }
};
