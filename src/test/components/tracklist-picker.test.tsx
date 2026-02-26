import { describe, expect, mock, test } from "bun:test";

import { render, screen, waitFor } from "@testing-library/preact";
import userEvent from "@testing-library/user-event";

import TracklistPicker from "~/components/tracklist-picker";

describe("TracklistPicker", () => {
  const defaultProps = {
    name: "tracklist-picker",
    label: "Select a tracklist...",
  };

  test("renders file input", () => {
    render(<TracklistPicker {...defaultProps} onSelect={mock()} />);

    const input = screen.getByLabelText("Select a tracklist...");

    expect(input).not.toBeNull();
  });

  test("calls the on select callback and renders the tracks", async () => {
    const user = userEvent.setup();

    const onSelect = mock();

    render(<TracklistPicker {...defaultProps} onSelect={onSelect} />);

    const file = new File(
      [
        `#	Artwork	Track Title	Artist	Album	Genre	BPM	Rating	Time	Key	Date Added
1		On The Block (Original Mix)	Eugenio Fico	On The Block	Funky House	126.00	     	06:01	11A	2022-10-01
2		It's A House Thing (Original Mix)	Block & Crown, Paul Parsons	Choices - 10 Essential House Tunes, Vol. 40	Funky House	125.00	     	05:16	11A	2022-10-01
3		Around The World (Club Mix)	Manuel Grandi	Around The World	Funky House	124.00	     	05:30	9A	2022-12-31`,
      ],
      "tracklist.txt",
      {
        type: "text/plain",
      },
    );

    const input = screen.getByLabelText("Select a tracklist...");

    await user.upload(input, file);

    await waitFor(() => {
      expect(onSelect).toHaveBeenCalledWith([
        [
          "On The Block (Original Mix)",
          "Eugenio Fico",
          "126.00",
          "11A",
          "Funky House",
        ],
        [
          "It's A House Thing (Original Mix)",
          "Block & Crown, Paul Parsons",
          "125.00",
          "11A",
          "Funky House",
        ],
        [
          "Around The World (Club Mix)",
          "Manuel Grandi",
          "124.00",
          "9A",
          "Funky House",
        ],
      ]);
    });

    expect(
      screen.getByText("1. Eugenio Fico - On The Block (Original Mix)"),
    ).toBeDefined();

    expect(
      screen.getByText(
        "2. Block & Crown, Paul Parsons - It's A House Thing (Original Mix)",
      ),
    ).toBeDefined();

    expect(
      screen.getByText("3. Manuel Grandi - Around The World (Club Mix)"),
    ).toBeDefined();

    const tracks = screen.getAllByRole("listitem");

    expect(tracks[0].innerHTML).toContain("126.00");
    expect(tracks[0].innerHTML).toContain("11A");
    expect(tracks[0].innerHTML).toContain("Funky House");

    expect(tracks[1].innerHTML).toContain("125.00");
    expect(tracks[1].innerHTML).toContain("11A");
    expect(tracks[1].innerHTML).toContain("Funky House");

    expect(tracks[2].innerHTML).toContain("124.00");
    expect(tracks[2].innerHTML).toContain("9A");
    expect(tracks[2].innerHTML).toContain("Funky House");
  });
});
