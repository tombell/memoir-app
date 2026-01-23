import { mock } from "bun:test";

import type { APIResponse } from "~/services/memoir";

export function createMockFetch<T>(response: APIResponse<T>) {
  const mockFn = mock(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(response),
    } as Response),
  );

  // @ts-expect-error: there is an error about missing property.
  global.fetch = mockFn;

  return mockFn;
}
