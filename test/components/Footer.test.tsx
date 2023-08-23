import { cleanup, render, screen } from "@testing-library/preact";
import { afterEach, describe, expect, test } from "vitest";

import Footer from "components/Footer";

describe("Footer", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders the links", () => {
    render(<Footer />);

    const links = screen.getAllByRole("link");

    expect(links[0].innerHTML).toBe("Tracklists");
    expect(links[0].getAttribute("href")).toBe("/tracklists");

    expect(links[1].innerHTML).toBe("Most Played Tracks");
    expect(links[1].getAttribute("href")).toBe("/tracks/mostplayed");

    expect(links[2].innerHTML).toBe("IAMDJRIFF on Mixcloud");
    expect(links[2].getAttribute("href")).toBe(
      "https://mixcloud.com/iamdjriff",
    );
  });
});
