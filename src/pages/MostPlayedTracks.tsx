import { useStore } from "@nanostores/preact";
import type { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";

import TrackItem from "~/components/TrackItem";

import { createMostPlayedTracksStore } from "~/stores/tracks";

function MostPlayedTracks() {
  const [$tracks] = useState(createMostPlayedTracksStore());

  const { data: tracks, loading } = useStore($tracks);

  if (tracks?.data) {
    return tracks.data.map(({ id, artist, name, genre, bpm, key }) => (
      <TrackItem
        key={id}
        id={id}
        artist={artist}
        name={name}
        genre={genre}
        bpm={bpm}
        camelotKey={key}
      />
    ));
  }

  if (loading) {
    return [0, 1, 2, 3, 4].map(() => (
      <TrackItem key={crypto.randomUUID()} loading />
    ));
  }

  // TODO: render error
  return null;
}

export default MostPlayedTracks as FunctionalComponent;
