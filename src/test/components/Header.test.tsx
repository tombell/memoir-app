import { describe, expect, test } from "bun:test";

import { render, screen } from "@testing-library/preact";

import Header from "~/components/Header";

describe("Header", () => {
  test("renders the image", () => {
    render(<Header />);

    const header = screen.getByRole("link");

    expect(header).toHaveAttribute("href", "/tracklists");

    const img = screen.getByRole("img");

    expect(img).toHaveAttribute("src", "/images/logo.svg");
  });
});
