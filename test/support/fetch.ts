import { Mock, afterEach, vi } from "vitest";

global.fetch = vi.fn();

afterEach(() => {
  (fetch as Mock).mockReset();
});

export const mockFetchResponse = (
  data: object,
  headers: { [key: string]: string } = {},
) => {
  (fetch as Mock).mockResolvedValue({
    json: () => Promise.resolve(data),
    headers: {
      get: (key: string) => headers[key] || null,
    },
  });
};

export const mockFetchThrows = () => {
  (fetch as Mock).mockImplementation(() => {
    throw new Error("boom town");
  });
};
