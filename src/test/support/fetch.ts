import { afterEach, mock } from "bun:test";

const mockFetch = mock();

global.fetch = mockFetch;

afterEach(() => {
  mockFetch.mockReset();
});

export const mockFetchResponse = (
  data: object,
  headers: { [key: string]: string } = {},
) => {
  mockFetch.mockResolvedValue({
    json: () => Promise.resolve(data),
    headers: {
      get: (key: string) => headers[key] || null,
    },
  });
};

export const mockFetchThrows = () => {
  mockFetch.mockImplementation(() => {
    throw new Error("boom town");
  });
};
