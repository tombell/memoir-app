import { cleanup, render, screen } from "@testing-library/preact";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, test, vi } from "vitest";

import Link from "components/Link";

describe("Link", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders the link", () => {
    render(<Link href="https://example.com">My link</Link>);

    const link = screen.getByText("My link");

    expect(link.getAttribute("href")).toBe("https://example.com");
  });

  test("renders the class name", () => {
    render(
      <Link href="https://example.com" className="my-class">
        My link
      </Link>
    );

    const link = screen.getByText("My link");

    expect(link.classList.contains("my-class")).toBeTruthy();
  });

  test("calls the on click callback", async () => {
    const user = userEvent.setup();

    const onClick = vi.fn();

    render(
      <Link href="/" onClick={onClick}>
        My link
      </Link>
    );

    const link = screen.getByText("My link");

    await user.click(link);

    expect(onClick).toHaveBeenCalled();
  });
});
