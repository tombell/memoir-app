import { cleanup, render, screen } from "@testing-library/preact";
import { afterEach, describe, expect, test } from "vitest";

import Header from "$/components/Header";

describe("Header", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders the image", () => {
    render(<Header />);

    const header = screen.getByRole("link");

    expect(header.getAttribute("href")).toBe("/tracklists");

    const img = screen.getByRole("img");

    expect(img.getAttribute("src")).toBe("/images/logo.svg");
  });
});
