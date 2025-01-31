import { afterEach, beforeEach, describe, expect, test } from "bun:test";

import {
  type APIResponse,
  get,
  patch,
  post,
  postFile,
} from "~/services/memoir";
import { mockFetch, mockFetchResponse } from "~/test/support/fetch";

afterEach(() => {
  mockFetch.mockReset();

  import.meta.env.VITE_MEMOIR_API_KEY = "";
});

describe("get", () => {
  const response = { data: true };

  beforeEach(() => {
    mockFetchResponse(response);
  });

  describe("without an api key", () => {
    test("returns data with a get request", async () => {
      const data = await get("/endpoint");

      expect(data).toStrictEqual(response);

      expect(mockFetch).toHaveBeenCalledWith("/api/endpoint", {
        method: "GET",
        body: null,
        headers: {},
      });
    });
  });

  describe("with an api key", () => {
    beforeEach(() => {
      import.meta.env.VITE_MEMOIR_API_KEY = "asdf-asdf";
    });

    test("returns data with a get request", async () => {
      const data = await get("/endpoint");

      expect(data).toStrictEqual(response);

      expect(mockFetch).toHaveBeenCalledWith("/api/endpoint", {
        method: "GET",
        body: null,
        headers: { "API-Token": "asdf-asdf" },
      });
    });
  });
});

describe("patch", () => {
  const response: APIResponse<{ value: boolean }> = { data: { value: true } };

  beforeEach(() => {
    mockFetchResponse(response);
  });

  describe("without an api key", () => {
    test("returns data with a get request", async () => {
      const payload = { value: false };

      const data = await post("/endpoint", payload);

      expect(data).toStrictEqual(response);

      expect(mockFetch).toHaveBeenCalledWith("/api/endpoint", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });
    });
  });

  describe("with an api key", () => {
    beforeEach(() => {
      import.meta.env.VITE_MEMOIR_API_KEY = "asdf-asdf";
    });

    test("returns data with a get request", async () => {
      const payload = { value: false };

      const data = await post("/endpoint", payload);

      expect(data).toStrictEqual(response);

      expect(mockFetch).toHaveBeenCalledWith("/api/endpoint", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "API-Token": "asdf-asdf",
          "Content-Type": "application/json",
        },
      });
    });
  });
});

describe("post", () => {
  const response: APIResponse<{ value: boolean }> = { data: { value: true } };

  beforeEach(() => {
    mockFetchResponse(response);
  });

  describe("without an api key", () => {
    test("returns data with a get request", async () => {
      const payload = { value: false };

      const data = await patch("/endpoint", payload);

      expect(data).toStrictEqual(response);

      expect(mockFetch).toHaveBeenCalledWith("/api/endpoint", {
        method: "PATCH",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });
    });
  });

  describe("with an api key", () => {
    beforeEach(() => {
      import.meta.env.VITE_MEMOIR_API_KEY = "asdf-asdf";
    });

    test("returns data with a get request", async () => {
      const payload = { value: false };

      const data = await patch("/endpoint", payload);

      expect(data).toStrictEqual(response);

      expect(mockFetch).toHaveBeenCalledWith("/api/endpoint", {
        method: "PATCH",
        body: JSON.stringify(payload),
        headers: {
          "API-Token": "asdf-asdf",
          "Content-Type": "application/json",
        },
      });
    });
  });
});

describe("postFile", () => {
  const response: APIResponse<{ value: boolean }> = { data: { value: true } };

  beforeEach(() => {
    mockFetchResponse(response);
  });

  describe("without an api key", () => {
    test("returns data with a get request", async () => {
      const file = new File(["fake file"], "artwork.jpg", {
        type: "image/jpeg",
      });

      const payload = new FormData();
      payload.append("artwork", file);

      const data = await postFile("/endpoint", payload);

      expect(data).toStrictEqual(response);

      expect(mockFetch).toHaveBeenCalledWith("/api/endpoint", {
        method: "POST",
        body: payload,
        headers: {},
      });
    });
  });

  describe("with an api key", () => {
    beforeEach(() => {
      import.meta.env.VITE_MEMOIR_API_KEY = "asdf-asdf";
    });

    test("returns data with a get request", async () => {
      const file = new File(["fake file"], "artwork.jpg", {
        type: "image/jpeg",
      });

      const payload = new FormData();
      payload.append("artwork", file);

      const data = await postFile("/endpoint", payload);

      expect(data).toStrictEqual(response);

      expect(mockFetch).toHaveBeenCalledWith("/api/endpoint", {
        method: "POST",
        body: payload,
        headers: { "API-Token": "asdf-asdf" },
      });
    });
  });
});
