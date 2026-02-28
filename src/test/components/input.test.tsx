import { render, screen } from "@testing-library/preact";
import userEvent from "@testing-library/user-event";
import { describe, expect, mock, test } from "bun:test";

import Input from "~/components/input";

describe("Input", () => {
  const defaultProps = {
    name: "test-input",
    placeholder: "Placeholder...",
    onInput: mock(),
  };

  test("renders input", () => {
    render(<Input {...defaultProps} />);

    const input = screen.getByRole("textbox");

    expect(input).toHaveAttribute("name", "test-input");
    expect(input).toHaveAttribute("placeholder", "Placeholder...");
  });

  test("renders label", () => {
    render(<Input {...defaultProps} label="Test input" />);

    expect(screen.getByText("Test input")).toBeDefined();
  });

  test("calls the on input callback", async () => {
    const user = userEvent.setup();

    const onInput = mock();

    render(<Input {...defaultProps} onInput={onInput} />);

    const input = screen.getByRole("textbox");
    input.focus();
    await user.keyboard("foo");

    expect(onInput).toHaveBeenNthCalledWith(1, "f");
    expect(onInput).toHaveBeenNthCalledWith(2, "fo");
    expect(onInput).toHaveBeenNthCalledWith(3, "foo");
  });

  test("calls the on focus callback", () => {
    const onFocus = mock();

    render(<Input {...defaultProps} onFocus={onFocus} />);

    const input = screen.getByRole("textbox");
    input.focus();

    expect(onFocus).toHaveBeenCalled();
  });
});
