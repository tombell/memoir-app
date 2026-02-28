import { render, screen } from "@testing-library/preact";
import { afterEach, beforeEach, describe, expect, mock, test } from "bun:test";

import TracklistsByTrack from "~/pages/tracklists/by-track";

import type { APIResponse } from "~/services/memoir";
import type { Tracklist } from "~/services/memoir/types";

const mockTracklists: APIResponse<Tracklist[]> = {
  data: [
    {
      id: "1",
      name: "Deep House Mix",
      date: "2023-10-01T00:00:00Z",
      artwork: "artwork1.jpg",
      url: "https://mixcloud.com/tracklist1",
      trackCount: 10,
    },
    {
      id: "2",
      name: "Late Night Groove",
      date: "2023-11-15T00:00:00Z",
      artwork: "artwork2.jpg",
      url: "https://mixcloud.com/tracklist2",
      trackCount: 8,
    },
  ],
  meta: {
    current_page: 1,
    total_pages: 2,
  },
};

describe("Tracklists ByTrack", () => {
  beforeEach(async () => {
    await mock.module("@nanostores/preact", () => ({
      useStore: () => {
        return { data: mockTracklists, loading: false };
      },
    }));
  });

  afterEach(() => {
    mock.restore();
  });

  test("renders tracklists and pagination", () => {
    render(<TracklistsByTrack />);

    expect(screen.getByText("Deep House Mix")).toBeDefined();
    expect(screen.getByText("Late Night Groove")).toBeDefined();

    expect(screen.getByText("10 Tracks")).toBeDefined();
    expect(screen.getByText("8 Tracks")).toBeDefined();

    expect(screen.getByText("Older →")).toBeDefined();
  });
});
