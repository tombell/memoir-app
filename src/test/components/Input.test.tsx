import { cleanup, render, screen } from "@testing-library/preact";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, test, vi } from "vitest";

import Input from "$/components/Input";

describe("Input", () => {
  afterEach(() => {
    cleanup();
  });

  const defaultProps = {
    name: "test-input",
    placeholder: "Placeholder...",
    onInput: () => {},
  };

  test("renders input", () => {
    render(<Input {...defaultProps} />);

    const input = screen.getByRole("textbox");

    expect(input.getAttribute("name")).toBe("test-input");
    expect(input.getAttribute("placeholder")).toBe("Placeholder...");
  });

  test("renders label", () => {
    render(<Input {...defaultProps} label="Test input" />);

    expect(screen.getByText("Test input")).toBeDefined();
  });

  test("calls the on input callback", async () => {
    const user = userEvent.setup();

    const onInput = vi.fn();

    render(<Input {...defaultProps} onInput={onInput} />);

    const input = screen.getByRole("textbox");
    input.focus();
    await user.keyboard("foo");

    expect(onInput).toHaveBeenNthCalledWith(1, "f");
    expect(onInput).toHaveBeenNthCalledWith(2, "fo");
    expect(onInput).toHaveBeenNthCalledWith(3, "foo");
  });

  test("calls the on focus callback", () => {
    const onFocus = vi.fn();

    render(<Input {...defaultProps} onFocus={onFocus} />);

    const input = screen.getByRole("textbox");
    input.focus();

    expect(onFocus).toHaveBeenCalled();
  });
});
