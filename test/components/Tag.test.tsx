import { cleanup, render, screen } from "@testing-library/preact";
import { afterEach, describe, expect, test } from "vitest";

import Tag, { Color } from "components/Tag";

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

    expect(tag.classList.contains("bg-green-600")).toBeTruthy();
  });

  const colors: { [key in Color]: string } = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    lightblue: "bg-blue-400",
    lilac: "bg-indigo-500",
    purple: "bg-purple-600",
  };

  Object.keys(colors).forEach((color) => {
    test(`renders the text with ${color} background color`, () => {
      render(<Tag {...defaultProps} color={color as Color} />);

      const tag = screen.getByText("My tag");

      expect(tag.classList.contains(colors[color as Color])).toBeTruthy();
    });
  });
});
