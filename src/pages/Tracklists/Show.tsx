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

  if (!tracklist) {
    return null;
  }

  return isLoading ? (
    <Loading />
  ) : (
    <div class="space-y-4">
      <Subheader text={tracklist.name} center />

      <div class="text-xs font-semibold text-center">
        <Link href={tracklist.url}>Listen on Mixcloud &rarr;</Link>
      </div>

      {tracklist.tracks && (
        <>
          <div class="text-center">
            <Genres
              genres={[
                ...new Set(tracklist.tracks.map((track) => track.genre)),
              ]}
            />
          </div>

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
      )}
    </div>
  );
};

export default Show;
