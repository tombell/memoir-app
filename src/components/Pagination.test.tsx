import { cleanup, render, screen } from "@testing-library/preact";
import { afterEach, describe, expect, test } from "vitest";

import Pagination from "components/Pagination";

describe("Pagination", () => {
  afterEach(() => {
    cleanup();
  });

  const defaultProps = {
    path: "/:page",
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

    const next = screen.getByText("Older →");

    expect(next.getAttribute("href")).toBe("/2");
  });

  test("renders previous link and not next link when not on page one and does not have more", () => {
    render(<Pagination {...defaultProps} page={2} hasMore={false} />);

    const prev = screen.getByText("← Newer");

    expect(prev.getAttribute("href")).toBe("/1");

    const next = screen.queryByText("Older →");

    expect(next).toBeNull();
  });

  test("renders previous link and next link when not on page one and does have more", () => {
    render(<Pagination {...defaultProps} page={2} hasMore />);

    const prev = screen.getByText("← Newer");

    expect(prev.getAttribute("href")).toBe("/1");

    const next = screen.getByText("Older →");

    expect(next.getAttribute("href")).toBe("/3");
  });

  test("renders id in the url in previous link and next link", () => {
    render(
      <Pagination path="/:id/:page" id="my-resource-id" page={2} hasMore />
    );

    const prev = screen.getByText("← Newer");

    expect(prev.getAttribute("href")).toBe("/my-resource-id/1");

    const next = screen.getByText("Older →");

    expect(next.getAttribute("href")).toBe("/my-resource-id/3");
  });
});
