import { css } from "g-style";
import { Fragment, FunctionalComponent, h } from "preact";

import Subheader from "components/molecules/Subheader";

import TrackItem from "components/organisms/TrackItem";

import Loading from "components/Loading";

import useMostPlayedTracks from "hooks/useMostPlayedTracks";

const subHeaderClassName = css({
  marginBottom: "1rem",
});

const MostPlayedTracks: FunctionalComponent = () => {
  const { isLoading, tracks } = useMostPlayedTracks();

  return (
    <>
      <div class={subHeaderClassName}>
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
