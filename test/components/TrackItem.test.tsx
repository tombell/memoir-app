import { cleanup, render, screen } from "@testing-library/preact";
import { afterEach, describe, expect, test } from "vitest";

import TrackItem from "@components/TrackItem";

describe("TrackItem", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders loading tracklist when loading", () => {
    render(<TrackItem loading />);

    expect(screen.getByTestId("track-loading")).toBeDefined();
  });

  test("renders the links", () => {
    render(
      <TrackItem
        id="asdf-asdf-asdf"
        artist="Artist"
        name="Track Name"
        genre="Tech House"
        bpm={123.0}
        camelotKey="12B"
      />,
    );

    const link = screen.getByRole("link", { name: "Artist - Track Name" });

    expect(link.getAttribute("href")).toBe("/tracks/asdf-asdf-asdf");
    expect(screen.getByText("123.00")).toBeDefined();
    expect(screen.getByText("12B")).toBeDefined();
    expect(screen.getByText("Tech House")).toBeDefined();
  });
});
