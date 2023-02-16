import { cleanup, fireEvent, render, screen } from "@testing-library/preact";
import { afterEach, describe, expect, test, vi } from "vitest";

import Button from "components/Button";

describe("Button", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders the text", () => {
    render(<Button text="Test button" onClick={() => {}} />);

    expect(
      screen.queryByRole("button", { name: "Test button" })
    ).not.toBeNull();
  });

  test("calls the on click callback", () => {
    const onClick = vi.fn();

    render(<Button text="Test button" onClick={onClick} />);

    fireEvent.click(screen.getByRole("button", { name: "Test button" }));

    expect(onClick).toHaveBeenCalled();
  });
});
