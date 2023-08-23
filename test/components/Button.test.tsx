import { cleanup, render, screen } from "@testing-library/preact";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, test, vi } from "vitest";

import Button from "components/Button";

describe("Button", () => {
  afterEach(() => {
    cleanup();
  });

  const defaultProps = {
    text: "Test button",
  };

  test("renders the text", () => {
    render(<Button {...defaultProps} onClick={() => {}} />);

    expect(
      screen.queryByRole("button", { name: "Test button" }),
    ).not.toBeNull();
  });

  test("calls the on click callback", async () => {
    const user = userEvent.setup();

    const onClick = vi.fn();

    render(<Button {...defaultProps} onClick={onClick} />);

    const button = screen.getByRole("button", { name: "Test button" });
    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
