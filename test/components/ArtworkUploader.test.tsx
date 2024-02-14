import { cleanup, render, screen } from "@testing-library/preact";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, test, vi } from "vitest";

import ArtworkUploader from "@components/ArtworkUploader";

describe("ArtworkUploader", () => {
  afterEach(() => {
    cleanup();
  });

  const defaultProps = {
    name: "artwork-uploader",
    label: "Select artwork to upload",
  };

  test("renders input label", () => {
    render(<ArtworkUploader {...defaultProps} onUpload={() => {}} />);

    const label = screen.queryByText("Select artwork to upload");

    expect(label).not.toBeNull();
  });

  test("renders file input", () => {
    render(<ArtworkUploader {...defaultProps} onUpload={() => {}} />);

    const input = screen.queryByTestId("filepicker");

    expect(input).not.toBeNull();
  });

  test("calls the on upload callback and renders the uploaded image", async () => {
    const user = userEvent.setup();

    const { mockPerform } = vi.hoisted(() => ({
      mockPerform: vi.fn().mockResolvedValue({ key: "asdfasdfasdf.jpg" }),
    }));

    vi.mock("@hooks/memoir", () => ({
      usePostArtwork: vi.fn().mockReturnValue({
        isLoading: false,
        perform: mockPerform,
      }),
    }));

    const onUpload = vi.fn();

    render(<ArtworkUploader {...defaultProps} onUpload={onUpload} />);

    const file = new File(["fake file"], "artwork.jpg", { type: "image/jpeg" });
    const input = screen.getByTestId("filepicker");

    await user.upload(input, file);

    expect(onUpload).toHaveBeenCalledWith("asdfasdfasdf.jpg");

    const data = new FormData();
    data.append("artwork", file);
    expect(mockPerform).toHaveBeenCalledWith(data);

    const img = screen.getByRole("img");

    expect(img.getAttribute("src")).toBe(
      "https://memoir-artwork-development.s3.amazonaws.com/asdfasdfasdf.jpg",
    );
  });
});
