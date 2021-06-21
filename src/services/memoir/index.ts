import {
  Artwork,
  NewTracklist,
  PagedTracks,
  PagedTracklists,
  Track,
  Tracklist,
} from "./types";

export {
  Artwork,
  NewTracklist,
  PagedTracks,
  PagedTracklists,
  Track,
  Tracklist,
};

export default class API {
  private url = MEMOIR_API_URL;

  private apiKey?: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey;
  }

  async request(endpoint: string, method = "GET", body?: FormData | string) {
    const headers: any = {};

    if (this.apiKey) {
      headers["API-Write-Key"] = this.apiKey;
    }

    const resp = await fetch(`${this.url}${endpoint}`, {
      method,
      body,
      headers,
    });

    return resp.json();
  }

  async fetchTracklist(id: string): Promise<Tracklist | null> {
    try {
      return await this.request(`/tracklists/${id}`);
    } catch {
      return null;
    }
  }

  async fetchTracklists(page: number = 1): Promise<PagedTracklists | null> {
    try {
      return await this.request(`/tracklists?page=${page}`);
    } catch {
      return null;
    }
  }

  async fetchTracklistsByTrack(
    id: string,
    page: number = 1
  ): Promise<PagedTracklists | null> {
    try {
      return await this.request(`/tracks/${id}/tracklists?page=${page}`);
    } catch {
      return null;
    }
  }

  async postTracklist(tracklist: NewTracklist): Promise<Tracklist | null> {
    try {
      const data = JSON.stringify(tracklist);
      return await this.request("/tracklists", "POST", data);
    } catch {
      return null;
    }
  }

  async fetchMostPlayedTracks(): Promise<Track[] | null> {
    try {
      return await this.request("/tracks/mostplayed");
    } catch {
      return null;
    }
  }

  async searchTracks(query: string): Promise<PagedTracks | null> {
    try {
      return await this.request(`/tracks/search?q=${query}`);
    } catch {
      return null;
    }
  }

  async patchTracklist(
    id: string,
    tracklist: Tracklist
  ): Promise<Tracklist | null> {
    try {
      const { name, date, url } = tracklist;
      const data = JSON.stringify({ name, date, url });
      return await this.request(`/tracklists/${id}`, "PATCH", data);
    } catch {
      return null;
    }
  }

  async uploadArtwork(file: File): Promise<Artwork | null> {
    try {
      const data = new FormData();
      data.append("artwork", file);
      return await this.request("/uploads/artwork", "POST", data);
    } catch {
      return null;
    }
  }
}
