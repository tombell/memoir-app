import { cleanup, render, screen } from "@testing-library/preact";
import { afterEach, describe, expect, test } from "vitest";

import Pagination from "components/Pagination";

describe("Pagination", () => {
  afterEach(() => {
    cleanup();
  });

  const defaultProps = {
    path: "/",
  };

  test("renders nothing when only one page", () => {
    render(<Pagination {...defaultProps} page={1} hasMore={false} />);

    const prev = screen.queryByText("← Newer");

    expect(prev).toBeNull();

    const next = screen.queryByText("Older →");

    expect(next).toBeNull();
  });

  test("renders next link when has more", () => {
    render(<Pagination {...defaultProps} page={1} hasMore />);

    const prev = screen.queryByText("← Newer");

    expect(prev).toBeNull();

    const next = screen.queryByText("Older →");

    expect(next).not.toBeNull();
  });

  test("renders previous link and not next link when not on page one and does not have more", () => {
    render(<Pagination {...defaultProps} page={2} hasMore={false} />);

    const prev = screen.queryByText("← Newer");

    expect(prev).not.toBeNull();

    const next = screen.queryByText("Older →");

    expect(next).toBeNull();
  });

  test("renders previous link and next link when not on page one and does have more", () => {
    render(<Pagination {...defaultProps} page={2} hasMore />);

    const prev = screen.queryByText("← Newer");

    expect(prev).not.toBeNull();

    const next = screen.queryByText("Older →");

    expect(next).not.toBeNull();
  });
});
