import { cleanup, render } from "@testing-library/preact";
import { afterEach, describe, expect, test } from "vitest";

import Pagination from "@components/Pagination";

describe("Pagination", () => {
  afterEach(() => {
    cleanup();
  });

  const defaultProps = {
    path: "/tracklists",
  };

  test("renders nothing when only one page", () => {
    const { queryByText } = render(
      <Pagination {...defaultProps} page={1} hasMore={false} />,
    );

    const prev = queryByText("← Newer");

    expect(prev).toBeNull();

    const next = queryByText("Older →");

    expect(next).toBeNull();
  });

  test("renders next link when has more", () => {
    const { queryByText, getByText } = render(
      <Pagination {...defaultProps} page={1} hasMore />,
    );

    const prev = queryByText("← Newer");

    expect(prev).toBeNull();

    const next = getByText("Older →");

    expect(next.getAttribute("href")).toBe("/tracklists?page=2");
  });

  test("renders previous link and not next link when not on page one and does not have more", () => {
    const { queryByText, getByText } = render(
      <Pagination {...defaultProps} page={2} hasMore={false} />,
    );

    const prev = getByText("← Newer");

    expect(prev.getAttribute("href")).toBe("/tracklists?page=1");

    const next = queryByText("Older →");

    expect(next).toBeNull();
  });

  test("renders previous link and next link when not on page one and does have more", () => {
    const { getByText } = render(
      <Pagination {...defaultProps} page={2} hasMore />,
    );

    const prev = getByText("← Newer");

    expect(prev.getAttribute("href")).toBe("/tracklists?page=1");

    const next = getByText("Older →");

    expect(next.getAttribute("href")).toBe("/tracklists?page=3");
  });

  test("renders id in the url in previous link and next link", () => {
    const { getByText } = render(
      <Pagination
        path="/tracklists/:id"
        id="my-resource-id"
        page={2}
        hasMore
      />,
    );

    const prev = getByText("← Newer");

    expect(prev.getAttribute("href")).toBe("/tracklists/my-resource-id?page=1");

    const next = getByText("Older →");

    expect(next.getAttribute("href")).toBe("/tracklists/my-resource-id?page=3");
  });
});
