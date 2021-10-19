import { Fragment, FunctionalComponent, h } from "preact";

import Subheader from "components/molecules/Subheader";

import TrackItem from "components/organisms/TrackItem";

import Loading from "components/Loading";

import useMostPlayedTracks from "hooks/useMostPlayedTracks";

const MostPlayedTracks: FunctionalComponent = () => {
  const { isLoading, tracks } = useMostPlayedTracks();

  return (
    <>
      <Subheader text="Most Played Tracks" />

      {isLoading && <Loading />}

      {!isLoading &&
        tracks &&
        tracks.map((track) => (
          <TrackItem
            id={track.id}
            artist={track.artist}
            name={track.name}
            genre={track.genre}
            bpm={track.bpm}
            camelotKey={track.key}
          />
        ))}
    </>
  );
};

export default MostPlayedTracks;
