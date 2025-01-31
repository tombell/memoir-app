import { useStore } from "@nanostores/preact";
import type { RoutableProps } from "preact-router";
import { useState } from "preact/hooks";

import Pagination from "~/components/Pagination";
import TracklistItem from "~/components/TracklistItem";

import { createTracklistsByTrackStore } from "~/stores/tracklists";

interface Props extends RoutableProps {
  id?: string;
}

export default function TracklistsByTrack({ path, id }: Props) {
  const page = new URLSearchParams(window.location.search).get("page") ?? "1";

  const [$tracklists] = useState(createTracklistsByTrackStore(id, page));

  const { data: tracklists, loading } = useStore($tracklists);

  if (tracklists?.data) {
    const hasMore = tracklists.meta
      ? tracklists.meta?.current_page < tracklists?.meta?.total_pages
      : false;

    return (
      <>
        {tracklists.data.map(({ id, name, date, artwork, trackCount }) => (
          <TracklistItem
            key={id}
            id={id}
            name={name}
            date={new Date(date)}
            artwork={artwork}
            trackCount={trackCount}
          />
        ))}

        {path && (
          <Pagination
            path={path}
            page={tracklists.meta?.current_page}
            hasMore={hasMore}
          />
        )}
      </>
    );
  }

  if (loading) {
    return [0, 1, 2, 3, 4].map(() => (
      <TracklistItem key={crypto.randomUUID()} loading />
    ));
  }

  // TODO: render error
  return null;
}
