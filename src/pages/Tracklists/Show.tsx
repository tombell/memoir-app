import { RoutableProps } from "preact-router";

import Genres from "$components/Genres";
import Link from "$components/Link";
import Loading from "$components/Loading";
import Subheader from "$components/Subheader";
import TrackItem from "$components/TrackItem";

import { useTracklist } from "$hooks/memoir";

interface Props extends RoutableProps {
  id?: string;
}

function Show({ id }: Props) {
  const { isLoading, data: tracklist } = useTracklist(id!);

  if (!tracklist.value) {
    return null;
  }

  return isLoading.value ? (
    <Loading />
  ) : (
    <div class="space-y-4">
      <Subheader text={tracklist.value.name} center />

      <div class="space-x-4 text-center text-xs font-semibold">
        <Link href={tracklist.value.url}>Listen on Mixcloud</Link>

        {import.meta.env.VITE_MEMOIR_API_KEY && (
          <Link href={`/tracklist/${id}/edit`}>(Edit)</Link>
        )}
      </div>

      {tracklist.value.tracks && (
        <>
          <div class="text-center">
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
    </div>
  );
}

export default Show;
