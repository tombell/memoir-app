import { cleanup, render, screen } from "@testing-library/preact";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, test, vi } from "vitest";

import Link from "$/components/Link";

describe("Link", () => {
  afterEach(() => {
    cleanup();
  });

  const defaultProps = {
    href: "https://example.com",
    children: "My link",
  };

  test("renders the link", () => {
    render(<Link {...defaultProps} />);

    const link = screen.getByText("My link");

    expect(link.getAttribute("href")).toBe("https://example.com");
  });

  test("renders the class name", () => {
    render(<Link {...defaultProps} className="my-class" />);

    const link = screen.getByText("My link");

    expect(link.classList.contains("my-class")).toBeTruthy();
  });

  test("calls the on click callback", async () => {
    const user = userEvent.setup();

    const onClick = vi.fn();

    render(<Link {...defaultProps} href="/" onClick={onClick} />);

    const link = screen.getByText("My link");

    await user.click(link);

    expect(onClick).toHaveBeenCalled();
  });
});
