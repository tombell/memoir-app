import { describe, expect, test } from "vitest";

import { parse } from "$/services/tracklists";

describe("parse", () => {
  test("returns an array of track parts", () => {
    const data = `
#	Artwork	Track Title	Artist	Album	Genre	BPM	Rating	Time	Key	Date Added
1		Back Tomorrow (Extended Mix)	Ferreck Dawn, Jem Cooke	Back Tomorrow - Extended Mix	House	125.00	     	05:55	5A	2021-12-24
2		Keep The Groove (Original Mix)	Fabio Neural, Ammo Avenue	Mariposa	Tech House	127.00	     	06:04	5A	2022-01-14
3		1, 2 Step (Extended Mix)	Sllash & Doppe	1, 2 Step	Tech House	126.00	     	05:27	6A	2021-12-24`;

    const tracks = parse(data);

    expect(tracks.length).toBe(3);

    expect(tracks[0][0]).toBe("Back Tomorrow (Extended Mix)");
    expect(tracks[0][1]).toBe("Ferreck Dawn, Jem Cooke");
    expect(tracks[0][2]).toBe("125.00");
    expect(tracks[0][3]).toBe("5A");
    expect(tracks[0][4]).toBe("House");

    expect(tracks[1][0]).toBe("Keep The Groove (Original Mix)");
    expect(tracks[1][1]).toBe("Fabio Neural, Ammo Avenue");
    expect(tracks[1][2]).toBe("127.00");
    expect(tracks[1][3]).toBe("5A");
    expect(tracks[1][4]).toBe("Tech House");

    expect(tracks[2][0]).toBe("1, 2 Step (Extended Mix)");
    expect(tracks[2][1]).toBe("Sllash & Doppe");
    expect(tracks[2][2]).toBe("126.00");
    expect(tracks[2][3]).toBe("6A");
    expect(tracks[2][4]).toBe("Tech House");
  });
});
