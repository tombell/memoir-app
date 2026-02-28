import { render, screen } from "@testing-library/preact";
import { describe, expect, test } from "bun:test";

import Footer from "~/components/footer";

describe("Footer", () => {
  test("renders the links", () => {
    render(<Footer />);

    const links = screen.getAllByRole("link");

    expect(links[0]).toContainHTML("Tracklists");
    expect(links[0]).toHaveAttribute("href", "/tracklists");

    expect(links[1]).toContainHTML("Most Played Tracks");
    expect(links[1]).toHaveAttribute("href", "/tracks/mostplayed");

    expect(links[2]).toContainHTML("IAMDJRIFF on Mixcloud");
    expect(links[2]).toHaveAttribute("href", "https://mixcloud.com/iamdjriff");
  });
});
