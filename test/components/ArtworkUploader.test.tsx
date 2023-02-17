import { cleanup, render, screen } from "@testing-library/preact";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, test, vi } from "vitest";

import ArtworkUploader from "components/ArtworkUploader";

describe("ArtworkUploader", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders file input", () => {
    render(<ArtworkUploader onUpload={() => {}} />);

    const input = screen.getByTestId("filepicker");

    expect(input).not.toBeNull();
  });

  test("calls the on upload callback and renders the uploaded image", async () => {
    const user = userEvent.setup();

    vi.mock("services/memoir", () => ({
      uploadArtwork: vi.fn().mockReturnValue({ key: "asdfasdfasdf.jpg" }),
    }));

    const onUpload = vi.fn();

    render(<ArtworkUploader onUpload={onUpload} />);

    const file = new File(["fake file"], "artwork.jpg", { type: "image/jpeg" });
    const input = screen.getByTestId("filepicker");

    await user.upload(input, file);

    expect(onUpload).toHaveBeenCalledWith("asdfasdfasdf.jpg");

    const img = screen.getByRole("img");

    expect(img.getAttribute("src")).toBe(
      "https://memoir-artwork-development.s3.amazonaws.com/asdfasdfasdf.jpg"
    );
  });
});
