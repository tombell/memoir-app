import { useStore } from "@nanostores/preact";

import Genres from "~/components/Genres";
import Link from "~/components/Link";
import Loading from "~/components/Loading";
import Subheader from "~/components/Subheader";
import TrackItem from "~/components/TrackItem";

import { $currentTracklistId, $tracklist } from "~/stores/tracklists";

export default function Show() {
  const { data: tracklist, loading } = useStore($tracklist);
  const id = useStore($currentTracklistId);

  if (tracklist?.data) {
    return (
      <div class="space-y-4">
        <Subheader text={tracklist.data.name} center />

        <div class="space-x-4 text-center text-xs font-semibold">
          <Link href={tracklist.data.url}>Listen on Mixcloud</Link>

          {process.env.PUBLIC_MEMOIR_API_KEY && (
            <Link href={`/tracklist/${id}/edit`}>(Edit)</Link>
          )}
        </div>

        {tracklist.data.tracks && (
          <>
            <div class="text-center">
              <Genres
                genres={[
                  ...new Set(tracklist.data.tracks.map((track) => track.genre)),
                ]}
              />
            </div>

            {tracklist.data.tracks.map((track) => (
              <TrackItem
                key={track.id}
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

  if (loading) {
    return <Loading />;
  }

  // TODO: render error
  return null;
}
