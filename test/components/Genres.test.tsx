import { cleanup, render, screen } from "@testing-library/preact";
import { afterEach, describe, expect, test } from "vitest";

import Genres from "$components/Genres";

describe("Genre", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders the tags", () => {
    render(<Genres genres={["Disco", "Tech House", "Trance"]} />);

    expect(screen.getByText("Disco")).toBeDefined();
    expect(screen.getByText("Tech House")).toBeDefined();
    expect(screen.getByText("Trance")).toBeDefined();
  });
});
