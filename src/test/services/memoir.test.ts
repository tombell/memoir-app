import { afterEach, beforeEach, describe, expect, test } from "vitest";

import request from "$/services/memoir";

import { mockFetchResponse } from "$/test/support/fetch";

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
        headers: { "Content-Type": "application/json" },
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
        headers: {
          "API-Token": "asdf-asdf",
          "Content-Type": "application/json",
        },
      });
    });
  });
});
