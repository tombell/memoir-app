import { cleanup, render, screen } from "@testing-library/preact";
import { afterEach, describe, expect, test } from "vitest";

import Subheader from "$components/Subheader";

describe("Subheader", () => {
  afterEach(() => {
    cleanup();
  });

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

    expect(subheader.classList.contains("text-center")).toBeTruthy();
  });
});
