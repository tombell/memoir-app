import type { FunctionalComponent } from "preact";

import Subheader from "$/components/Subheader";
import TrackItem from "$/components/TrackItem";

import { useMostPlayedTracks } from "$/hooks/memoir";

function MostPlayedTracks() {
  const { isLoading, data: tracks } = useMostPlayedTracks();

  return (
    <div class="space-y-4">
      <Subheader text="Most Played Tracks" center />

      {isLoading.value
        ? [0, 1, 2, 3, 4].map(() => (
            <TrackItem key={crypto.randomUUID()} loading />
          ))
        : tracks.value?.map(({ id, artist, name, genre, bpm, key }) => (
            <TrackItem
              key={id}
              id={id}
              artist={artist}
              name={name}
              genre={genre}
              bpm={bpm}
              camelotKey={key}
            />
          ))}
    </div>
  );
}

export default MostPlayedTracks as FunctionalComponent;
