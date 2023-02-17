import { Mock, vi } from "vitest";

global.fetch = vi.fn();

export const mockFetchResponse = (
  data: object,
  headers: { [key: string]: string } = {}
) => {
  (fetch as Mock).mockResolvedValue({
    json: () => Promise.resolve(data),
    headers: {
      get: (key: string) => headers[key] || null,
    },
  });
};
