import { afterEach, beforeEach, describe, expect, test } from "vitest";

import { mockFetchResponse, mockFetchThrows } from "test/support/fetch";

import {
  patchTracklist,
  postTracklist,
  request,
  searchTracks,
} from "services/memoir";
import { NewTracklist, Tracklist } from "services/memoir/types";

afterEach(() => {
  import.meta.env.VITE_MEMOIR_API_KEY = "";
});

describe("request", () => {
  const response = { data: true };

  beforeEach(() => {
    mockFetchResponse(response);
  });

  describe("without an api key", () => {
    test("returns data with a get request", async () => {
      const resp = await request("/endpoint");
      const data = await resp.json();

      expect(data).toStrictEqual(response);

      expect(fetch).toHaveBeenCalledWith("/api/endpoint", {
        method: "GET",
        body: null,
        headers: {},
      });
    });

    test("returns data with a post request with a body", async () => {
      const body = JSON.stringify({ foo: "bar" });
      const resp = await request("/endpoint", "POST", body);
      const data = await resp.json();

      expect(data).toStrictEqual(response);

      expect(fetch).toHaveBeenCalledWith("/api/endpoint", {
        method: "POST",
        body,
        headers: {},
      });
    });
  });

  describe("with an api key", () => {
    beforeEach(() => {
      import.meta.env.VITE_MEMOIR_API_KEY = "asdf-asdf";
    });

    test("returns data with a get request", async () => {
      const resp = await request("/endpoint");
      const data = await resp.json();

      expect(data).toStrictEqual(response);

      expect(fetch).toHaveBeenCalledWith("/api/endpoint", {
        method: "GET",
        body: null,
        headers: { "API-Token": "asdf-asdf" },
      });
    });

    test("returns data with a post request with a body", async () => {
      const body = JSON.stringify({ foo: "bar" });
      const resp = await request("/endpoint", "POST", body);
      const data = await resp.json();

      expect(data).toStrictEqual(response);

      expect(fetch).toHaveBeenCalledWith("/api/endpoint", {
        method: "POST",
        body,
        headers: { "API-Token": "asdf-asdf" },
      });
    });
  });
});

describe("postTracklist", () => {
  const tracklist: NewTracklist = {
    artwork: "https://example.com/artwork.jpg",
    date: "2022-01-01",
    name: "Tracklist",
    tracks: [],
    url: "https://example.com",
  };

  test("returns data of the tracklist", async () => {
    const response = { id: "asdf-asdf-asdf" };

    mockFetchResponse(response);

    const data = await postTracklist(tracklist);

    expect(data).toStrictEqual(response);

    expect(fetch).toHaveBeenCalledWith("/api/tracklists", {
      method: "POST",
      body: JSON.stringify(tracklist),
      headers: {},
    });
  });

  test("returns null when request fails", async () => {
    mockFetchThrows();

    const data = await postTracklist(tracklist);

    expect(data).toBeNull();
  });
});

describe("patchTracklist", () => {
  const tracklist: Tracklist = {
    id: "asdf-asdf-asdf",
    artwork: "https://example.com/artwork.jpg",
    name: "Tracklist",
    date: "2022-01-01",
    tracks: [],
    url: "https://example.com",
    trackCount: 0,
  };

  test("returns data of the tracklist", async () => {
    const response = { id: "asdf-asdf-asdf" };

    mockFetchResponse(response);

    const data = await patchTracklist(tracklist);

    expect(data).toStrictEqual(response);

    const { name, date, url } = tracklist;

    expect(fetch).toHaveBeenCalledWith("/api/tracklists/asdf-asdf-asdf", {
      method: "PATCH",
      body: JSON.stringify({ name, date, url }),
      headers: {},
    });
  });

  test("returns null when request fails", async () => {
    mockFetchThrows();

    const data = await patchTracklist(tracklist);

    expect(data).toBeNull();
  });
});

describe("searchTracks", () => {
  const query = "my-track";

  test("returns data of the tracks", async () => {
    const response = [{ id: "asdf-asdf-asdf" }];

    mockFetchResponse(response);

    const data = await searchTracks(query);

    expect(data).toStrictEqual(response);

    expect(fetch).toHaveBeenCalledWith(`/api/tracks/search?q=${query}`, {
      method: "GET",
      body: null,
      headers: {},
    });
  });

  test("returns null when request fails", async () => {
    mockFetchThrows();

    const data = await searchTracks(query);

    expect(data).toBeNull();
  });
});
