import { Fragment, h } from "preact";
import { RoutableProps } from "preact-router";

import Link from "components/atoms/Link";
import Loading from "components/atoms/Loading";
import Subheader from "components/atoms/Subheader";

import Genres from "components/molecules/Genres";

import TrackItem from "components/organisms/TrackItem";

import useGetResource from "hooks/useGetResource";

import { Tracklist } from "services/memoir/types";

interface Props extends RoutableProps {
  id?: string;
}

export default ({ id }: Props) => {
  const { isLoading, data: tracklist } = useGetResource<Tracklist>(
    `/tracklists/${id}`
  );

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

          <div class="mb-4 text-xs font-semibold text-center">
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
