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
    <>
      <div class="mb-4">
        <Subheader text="Most Played Tracks" center />
      </div>

      {isLoading && <Loading />}

      {!isLoading &&
        tracks?.map(({ id, artist, name, genre, bpm, key }) => (
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
    </>
  );
};

export default MostPlayedTracks;
