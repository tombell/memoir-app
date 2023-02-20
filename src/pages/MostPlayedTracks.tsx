import { FunctionalComponent } from "preact";

import Loading from "components/Loading";
import Subheader from "components/Subheader";
import TrackItem from "components/TrackItem";

import useGetResource from "hooks/useGetResource";

import { Track } from "services/memoir/types";

const MostPlayedTracks: FunctionalComponent = () => {
  const { isLoading, data: tracks } =
    useGetResource<Track[]>("/tracks/mostplayed");

  return (
    <div class="space-y-4">
      <Subheader text="Most Played Tracks" center />

      {isLoading
        ? [0, 1, 2, 3, 4].map(() => <TrackItem loading />)
        : tracks?.map(({ id, artist, name, genre, bpm, key }) => (
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
};

export default MostPlayedTracks;
