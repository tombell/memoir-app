import { Fragment, h } from "preact";
import { RoutableProps } from "preact-router";

import Link from "components/molecules/Link";
import Loading from "components/molecules/Loading";
import Subheader from "components/molecules/Subheader";

import Genres from "components/organisms/Genres";
import TrackItem from "components/organisms/TrackItem";

import useTracklist from "hooks/useTracklist";

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
          <div class="mb-4">
            <Subheader text={tracklist.name} center />
          </div>

          <div class="mb-4 font-semibold text-xs text-center">
            <Link href={tracklist.url}>Listen on Mixcloud &rarr;</Link>
          </div>

          {tracklist.tracks && (
            <>
              <div class="mb-4 text-center">
                <Genres
                  genres={[
                    ...new Set(tracklist.tracks.map((track) => track.genre)),
                  ]}
                />
              </div>

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
