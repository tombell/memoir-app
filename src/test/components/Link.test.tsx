import { describe, expect, mock, test } from "bun:test";

import { render, screen } from "@testing-library/preact";
import userEvent from "@testing-library/user-event";

import Link from "~/components/Link";

describe("Link", () => {
  const defaultProps = {
    href: "https://example.com",
    children: "My link",
  };

  test("renders the link", () => {
    render(<Link {...defaultProps} />);

    const link = screen.getByText("My link");

    expect(link).toHaveAttribute("href", "https://example.com");
  });

  test("renders the class name", () => {
    render(<Link {...defaultProps} className="my-class" />);

    const link = screen.getByText("My link");

    expect(link).toHaveClass("my-class");
  });

  test("calls the on click callback", async () => {
    const user = userEvent.setup();

    const onClick = mock();

    render(<Link {...defaultProps} href="/" onClick={onClick} />);

    const link = screen.getByText("My link");

    await user.click(link);

    expect(onClick).toHaveBeenCalled();
  });
});
