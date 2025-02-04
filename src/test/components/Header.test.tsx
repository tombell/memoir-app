import { describe, expect, test } from "bun:test";

import { render, screen } from "@testing-library/preact";

import Header from "~/components/Header";

describe("Header", () => {
  test("renders the image", () => {
    render(<Header />);

    const header = screen.getByRole("link");

    expect(header.getAttribute("href")).toBe("/tracklists");

    const img = screen.getByRole("img");

    expect(img.getAttribute("src")).toBe("/images/logo.svg");
  });
});
