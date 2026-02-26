import { afterEach, beforeEach, describe, expect, mock, test } from "bun:test";

import { render, screen } from "@testing-library/preact";

import Show from "~/pages/tracklists/show";

import type { APIResponse } from "~/services/memoir";
import type { Tracklist } from "~/services/memoir/types";

const mockTracklist: APIResponse<Tracklist> = {
  data: {
    id: "1",
    name: "Deep House Mix",
    date: "2023-10-01T00:00:00Z",
    artwork: "artwork.jpg",
    url: "https://mixcloud.com/tracklist1",
    trackCount: 3,
    tracks: [
      {
        id: "t1",
        artist: "Artist 1",
        name: "Track 1",
        genre: "Deep House",
        bpm: 128,
        key: "8A",
      },
      {
        id: "t2",
        artist: "Artist 2",
        name: "Track 2",
        genre: "Techno",
        bpm: 130,
        key: "6A",
      },
      {
        id: "t3",
        artist: "Artist 1",
        name: "Track 3",
        genre: "Deep House",
        bpm: 125,
        key: "7A",
      },
    ],
  },
};

describe("Tracklists Show", () => {
  beforeEach(async () => {
    await mock.module("@nanostores/preact", () => ({
      useStore: () => ({ data: mockTracklist, loading: false }),
    }));
  });

  afterEach(() => {
    mock.restore();
  });

  test("renders tracklist details and tracks", () => {
    render(<Show />);

    expect(screen.getByText("Deep House Mix")).toBeDefined();

    expect(screen.getByText("Listen on Mixcloud")).toBeDefined();

    expect(screen.getAllByText("Deep House")).toHaveLength(3);
    expect(screen.getAllByText("Techno")).toHaveLength(2);

    expect(screen.getByText("Artist 1 - Track 1")).toBeDefined();
    expect(screen.getByText("Artist 2 - Track 2")).toBeDefined();
    expect(screen.getByText("Artist 1 - Track 3")).toBeDefined();
  });
});
