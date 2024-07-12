import type { RoutableProps } from "preact-router";

import Pagination from "$components/Pagination";
import TracklistItem from "$components/TracklistItem";

import { useTracklistsByTrack } from "$hooks/memoir";

interface Props extends RoutableProps {
  id?: string;
}

function TracklistsByTrack({ path, id }: Props) {
  const params = new URLSearchParams(window.location.search);
  const page = parseInt(params.get("page") || "1", 10);

  const {
    isLoading,
    hasMore,
    data: tracklists,
  } = useTracklistsByTrack(id!, page);

  return (
    <>
      {isLoading.value
        ? [0, 1, 2, 3, 4].map(() => <TracklistItem loading />)
        : tracklists.value?.map(
            ({ id: trackId, name, date, artwork, trackCount }) => (
              <TracklistItem
                key={trackId}
                id={trackId}
                name={name}
                date={new Date(date)}
                artwork={artwork}
                trackCount={trackCount}
              />
            ),
          )}

      <Pagination path={path!} id={id} page={page} hasMore={hasMore.value} />
    </>
  );
}

export default TracklistsByTrack;
