import { render, screen } from "@testing-library/preact";
import { describe, expect, test } from "bun:test";

import Tag, { type Color } from "~/components/tag";

describe("Tag", () => {
  const defaultProps = {
    text: "My tag",
  };

  test("renders the text with default background color", () => {
    render(<Tag {...defaultProps} />);

    const tag = screen.getByText("My tag");

    expect(tag).toHaveClass("bg-lime-700");
  });

  test.each([
    ["blue", "bg-blue-600"],
    ["green", "bg-lime-700"],
    ["lightblue", "bg-sky-700"],
    ["lilac", "bg-indigo-700"],
    ["purple", "bg-purple-600"],
  ])(`renders the text with %p background color`, (color, expected) => {
    render(<Tag {...defaultProps} color={color as Color} />);

    const tag = screen.getByText("My tag");

    expect(tag).toHaveClass(expected);
  });
});
