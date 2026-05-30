import { describe, expect, test } from "bun:test";

import { render, screen } from "@testing-library/preact";

import TrackItem from "~/components/track-item";

describe("TrackItem", () => {
  test("renders loading tracklist when loading", () => {
    render(<TrackItem loading />);

    expect(screen.getByRole("progressbar")).toBeDefined();
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

    expect(link).toHaveAttribute("href", "/tracks/asdf-asdf-asdf/tracklists");
    expect(screen.getByText("123.00")).toBeDefined();
    expect(screen.getByText("12B")).toBeDefined();
    expect(screen.getByText("Tech House")).toBeDefined();
  });
});
