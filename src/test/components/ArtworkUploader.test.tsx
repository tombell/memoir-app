import { afterEach, beforeEach, describe, expect, mock, test } from "bun:test";

import { render, screen } from "@testing-library/preact";
import userEvent from "@testing-library/user-event";

import ArtworkUploader from "~/components/ArtworkUploader";

describe("ArtworkUploader", () => {
  const mockFetch = mock();
  // @ts-ignore
  global.fetch = mockFetch;

  beforeEach(() => {
    mockFetch.mockResolvedValue({
      json: () => Promise.resolve({ data: { key: "asdfasdfasdf.jpg" } }),
    });
  });

  afterEach(() => {
    mockFetch.mockRestore();
  });

  const defaultProps = {
    name: "artwork-uploader",
    label: "Select artwork to upload",
  };

  test("renders input label", () => {
    render(<ArtworkUploader {...defaultProps} onUpload={mock()} />);

    expect(screen.queryByText("Select artwork to upload")).not.toBeNull();
  });

  test("renders file input", () => {
    render(<ArtworkUploader {...defaultProps} onUpload={mock()} />);

    const input = screen.getByLabelText("Select artwork to upload");

    expect(input).not.toBeNull();
  });

  test("calls the on upload callback and renders the uploaded image", async () => {
    const user = userEvent.setup();

    const onUpload = mock();

    render(<ArtworkUploader {...defaultProps} onUpload={onUpload} />);

    const file = new File(["fake file"], "artwork.jpg", { type: "image/jpeg" });

    const input = screen.getByLabelText("Select artwork to upload");

    await user.upload(input, file);

    expect(onUpload).toHaveBeenCalledWith("asdfasdfasdf.jpg");

    const data = new FormData();
    data.append("artwork", file);

    expect(mockFetch).toHaveBeenCalledWith("/api/artwork", {
      method: "POST",
      body: data,
      headers: {},
    });

    const img = screen.getByRole("img");

    expect(img).toHaveAttribute(
      "src",
      "https://memoir-artwork-development.s3.amazonaws.com/asdfasdfasdf.jpg",
    );
  });
});
