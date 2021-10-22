import { css } from "g-style";
import { Fragment, h } from "preact";
import { RoutableProps } from "preact-router";

import Link from "components/molecules/Link";
import Loading from "components/molecules/Loading";
import Subheader from "components/molecules/Subheader";

import Genres from "components/organisms/Genres";
import TrackItem from "components/organisms/TrackItem";

import useTracklist from "hooks/useTracklist";

const linkClassName = css({
  marginBottom: "1rem",
  fontSize: "0.8125rem",
  fontWeight: 600,
  textAlign: "center",
});

interface Props extends RoutableProps {
  id?: string;
}

export default ({ id }: Props) => {
  const { isLoading, tracklist } = useTracklist(id!);

  if (!tracklist) {
    return null;
  }

  return (
    <>
      {isLoading && <Loading />}

      {!isLoading && tracklist && (
        <>
          <Subheader text={tracklist.name} />

          <div class={linkClassName}>
            <Link href={tracklist.url}>Listen on Mixcloud &rarr;</Link>
          </div>

          {tracklist.tracks && (
            <>
              <>
                <Genres
                  genres={[
                    ...new Set(tracklist.tracks.map((track) => track.genre)),
                  ]}
                />
              </>

              <>
                {tracklist.tracks.map((track) => (
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
            </>
          )}
        </>
      )}
    </>
  );
};
