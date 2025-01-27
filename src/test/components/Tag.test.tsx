import { afterEach, describe, expect, test } from "bun:test";

import { cleanup, render, screen } from "@testing-library/preact";

import Tag, { type Color } from "~/components/Tag";

describe("Tag", () => {
  afterEach(() => {
    cleanup();
  });

  const defaultProps = {
    text: "My tag",
  };

  test("renders the text with default background color", () => {
    render(<Tag {...defaultProps} />);

    const tag = screen.getByText("My tag");

    expect(tag.classList.contains("bg-lime-700")).toBeTruthy();
  });

  const colors: { [key in Color]: string } = {
    blue: "bg-blue-600",
    green: "bg-lime-700",
    lightblue: "bg-sky-700",
    lilac: "bg-indigo-700",
    purple: "bg-purple-600",
  };

  for (const color of Object.keys(colors)) {
    test(`renders the text with ${color} background color`, () => {
      render(<Tag {...defaultProps} color={color as Color} />);

      const tag = screen.getByText("My tag");

      expect(tag.classList.contains(colors[color as Color])).toBeTruthy();
    });
  }
});
