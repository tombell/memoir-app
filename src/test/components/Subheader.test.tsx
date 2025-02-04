import { describe, expect, test } from "bun:test";

import { render, screen } from "@testing-library/preact";

import Subheader from "~/components/Subheader";

describe("Subheader", () => {
  const defaultProps = {
    text: "My subheader",
  };

  test("renders the text", () => {
    render(<Subheader {...defaultProps} />);

    const subheader = screen.getByText("My subheader");

    expect(subheader).not.toBeNull();
  });

  test("renders in the center", () => {
    render(<Subheader {...defaultProps} center />);

    const subheader = screen.getByText("My subheader");

    expect(subheader).toHaveClass("text-center");
  });
});
