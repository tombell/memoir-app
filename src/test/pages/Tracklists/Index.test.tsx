import { afterEach, beforeEach, describe, expect, mock, test } from "bun:test";

import { render, screen } from "@testing-library/preact";

import Index from "~/pages/Tracklists/Index";

import type { APIResponse } from "~/services/memoir";
import type { Tracklist } from "~/services/memoir/types";

const mockTracklistsPage1: APIResponse<Tracklist[]> = {
  data: [
    {
      id: "1",
      name: "Summer Mix 2023",
      date: "2023-07-15T00:00:00Z",
      artwork: "artwork1.jpg",
      url: "https://mixcloud.com/tracklist1",
      trackCount: 10,
    },
    {
      id: "2",
      name: "Winter Vibes",
      date: "2023-12-01T00:00:00Z",
      artwork: "artwork2.jpg",
      url: "https://mixcloud.com/tracklist2",
      trackCount: 12,
    },
    {
      id: "3",
      name: "Deep House Set",
      date: "2024-03-10T00:00:00Z",
      artwork: "artwork3.jpg",
      url: "https://mixcloud.com/tracklist3",
      trackCount: 8,
    },
  ],
  meta: {
    current_page: 1,
    total_pages: 2,
  },
};

const mockTracklistsPage2: APIResponse<Tracklist[]> = {
  ...mockTracklistsPage1,
  meta: {
    current_page: 2,
    total_pages: 2,
  },
};

describe("Tracklists Index", () => {
  describe("when on the first page", () => {
    beforeEach(async () => {
      await mock.module("@nanostores/preact", () => ({
        useStore: () => ({ data: mockTracklistsPage1, loading: false }),
      }));
    });

    afterEach(() => {
      mock.restore();
    });

    test("renders tracklists", () => {
      render(<Index />);

      expect(screen.getByText("Summer Mix 2023")).toBeDefined();
      expect(screen.getByText("Winter Vibes")).toBeDefined();
      expect(screen.getByText("Deep House Set")).toBeDefined();

      expect(screen.getByText("10 Tracks")).toBeDefined();
      expect(screen.getByText("12 Tracks")).toBeDefined();
      expect(screen.getByText("8 Tracks")).toBeDefined();
    });

    test("renders older pagination link", () => {
      render(<Index />);

      expect(screen.getByText("Older →")).toBeDefined();
    });
  });

  describe("when on the second page", () => {
    beforeEach(async () => {
      await mock.module("@nanostores/preact", () => ({
        useStore: () => ({ data: mockTracklistsPage2, loading: false }),
      }));
    });

    afterEach(() => {
      mock.restore();
    });

    test("renders newer pagination link", () => {
      render(<Index />);

      expect(screen.getByText("← Newer")).toBeDefined();
    });

    test("does not render older pagination link", () => {
      render(<Index />);

      expect(screen.queryByText("Older →")).toBeNull();
    });
  });
});
