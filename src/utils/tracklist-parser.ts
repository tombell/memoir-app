export default (text: string) => {
  const tracks: string[][] = [];

  text.split("\n").forEach((line) => {
    const parts = line.split("\t");

    if (parts[0] === "#" || parts.length <= 1) {
      return;
    }

    tracks.push([parts[2], parts[3], parts[6], parts[9], parts[5]]);
  });

  return tracks;
};
