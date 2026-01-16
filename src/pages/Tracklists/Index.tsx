import { useStore } from "@nanostores/preact";

import Pagination from "~/components/Pagination";
import TracklistItem from "~/components/TracklistItem";

import { $currentPath, $tracklists } from "~/stores/tracklists";

export default function Index() {
  const { data: tracklists, loading } = useStore($tracklists);
  const path = useStore($currentPath);

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
