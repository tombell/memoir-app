export const parse = (text: string) => {
  const tracks: string[][] = [];

  for (const line of text.split("\n")) {
    const parts = line.split("\t");

    if (parts[0] === "#" || parts[0] === "" || parts.length <= 1) {
      continue;
    }

    tracks.push([parts[2], parts[3], parts[6], parts[9], parts[5]]);
  }

  return tracks;
};
