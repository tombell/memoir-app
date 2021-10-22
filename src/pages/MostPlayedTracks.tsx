import { css } from "g-style";
import { Fragment, FunctionalComponent, h } from "preact";

import Loading from "components/molecules/Loading";
import Subheader from "components/molecules/Subheader";

import TrackItem from "components/organisms/TrackItem";

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
