import { useStore } from "@nanostores/preact";
import { useState } from "preact/hooks";

import Pagination from "~/components/Pagination";
import TracklistItem from "~/components/TracklistItem";

import { createTracklistsStore } from "~/stores/tracklists";

interface Props {
  page?: string;
  path: string;
}

export default function Index({ page = "1", path }: Props) {
  const [$tracklists] = useState(createTracklistsStore(page));

  const { data: tracklists, loading } = useStore($tracklists);

  if (tracklists?.data) {
    const hasMore = tracklists.meta
      ? tracklists.meta?.current_page < tracklists?.meta?.total_pages
      : false;

    return (
      <>
        {tracklists.data?.map(({ id, name, date, artwork, trackCount }) => (
          <TracklistItem
            key={id}
            id={id}
            name={name}
            date={new Date(date)}
            artwork={artwork}
            trackCount={trackCount}
          />
        ))}

        <Pagination
          hasMore={hasMore}
          page={tracklists.meta?.current_page}
          path={path}
        />
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
