import { RoutableProps } from "preact-router";

import Genres from "components/Genres";
import Link from "components/Link";
import Loading from "components/Loading";
import Subheader from "components/Subheader";
import TrackItem from "components/TrackItem";

import useGetResource from "hooks/useGetResource";

import { Tracklist } from "services/memoir/types";

interface Props extends RoutableProps {
  id?: string;
}

const Show = ({ id }: Props) => {
  const { isLoading, data: tracklist } = useGetResource<Tracklist>(
    `/tracklists/${id}`
  );

  if (!tracklist.value) {
    return null;
  }

  return isLoading.value ? (
    <Loading />
  ) : (
    <>
      <div class="mb-4">
        <Subheader text={tracklist.value.name} center />
      </div>

      <div class="mb-4 text-xs font-semibold text-center">
        <Link href={tracklist.value.url}>Listen on Mixcloud &rarr;</Link>
      </div>

      {tracklist.value.tracks && (
        <>
          <div class="mb-4 text-center">
            <Genres
              genres={[
                ...new Set(tracklist.value.tracks.map((track) => track.genre)),
              ]}
            />
          </div>

          {tracklist.value.tracks.map((track) => (
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
      )}
    </>
  );
};

export default Show;
