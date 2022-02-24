import { Fragment, FunctionalComponent, h } from "preact";

import Loading from "components/atoms/Loading";
import Subheader from "components/atoms/Subheader";

import TrackItem from "components/organisms/TrackItem";

import useGetResources from "hooks/useGetResources";

import { Track } from "services/memoir/types";

const MostPlayedTracks: FunctionalComponent = () => {
  const { isLoading, data: tracks } =
    useGetResources<Track[]>("/tracks/mostplayed");

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
