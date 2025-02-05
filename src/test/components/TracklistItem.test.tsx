import { describe, expect, test } from "bun:test";

import { render, screen } from "@testing-library/preact";

import TracklistItem from "~/components/TracklistItem";

describe("TracklistItem", () => {
  test("renders loading tracklist when loading", () => {
    render(<TracklistItem loading />);

    expect(screen.getByRole("progressbar")).toBeDefined();
  });

  test("renders the links", () => {
    render(
      <TracklistItem
        loading={false}
        id="asdf-asdf-asdf"
        name="My tracklist"
        date={new Date("2023-01-02")}
        artwork="artwork.jpg"
        trackCount={10}
      />,
    );

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/tracklist/asdf-asdf-asdf");

    const artwork = screen.getByRole("img");

    expect(artwork).toHaveAttribute(
      "src",
      "https://memoir-artwork-development.s3.amazonaws.com/artwork.jpg",
    );

    expect(screen.getByText("My tracklist")).toBeDefined();
    expect(screen.getByText("10 Tracks")).toBeDefined();
    expect(screen.getByText("02/01/2023")).toBeDefined();
  });
});
