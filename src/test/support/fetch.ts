import { mock } from "bun:test";

export const mockFetch = mock();
global.fetch = mockFetch;

export const mockFetchResponse = (
  data: object,
  headers: Record<string, string> = {},
) => {
  mockFetch.mockResolvedValue({
    json: () => Promise.resolve(data),
    headers: {
      get: (key: string) => headers[key] || null,
    },
  });
};
