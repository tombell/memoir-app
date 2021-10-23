import { Fragment, FunctionalComponent, h } from "preact";

import Loading from "components/molecules/Loading";
import Subheader from "components/molecules/Subheader";

import TrackItem from "components/organisms/TrackItem";

import useMostPlayedTracks from "hooks/useMostPlayedTracks";

const MostPlayedTracks: FunctionalComponent = () => {
  const { isLoading, tracks } = useMostPlayedTracks();

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
