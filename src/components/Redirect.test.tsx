import { cleanup, render } from "@testing-library/preact";
import { afterEach, describe, expect, test, vi } from "vitest";

const mockRouteFn = vi.fn();
vi.doMock("preact-router", () => ({ route: mockRouteFn }));

import Redirect from "components/Redirect";

describe("Redirect", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders the links", async () => {
    render(<Redirect to="https://example.com" />);

    expect(mockRouteFn).toHaveBeenCalledWith("https://example.com", true);
  });
});
