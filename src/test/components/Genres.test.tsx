import { describe, expect, test } from "bun:test";

import { render, screen } from "@testing-library/preact";

import Genres from "~/components/Genres";

describe("Genre", () => {
  test("renders the tags", () => {
    render(<Genres genres={["Disco", "Tech House", "Trance"]} />);

    expect(screen.getByText("Disco")).toBeDefined();
    expect(screen.getByText("Tech House")).toBeDefined();
    expect(screen.getByText("Trance")).toBeDefined();
  });
});
