import type { RoutableProps } from "preact-router";

import Pagination from "$components/Pagination";
import TracklistItem from "$components/TracklistItem";

import { useTracklists } from "$hooks/memoir";

function Index({ path }: RoutableProps) {
  const params = new URLSearchParams(window.location.search);
  const page = Number.parseInt(params.get("page") || "1", 10);

  const { isLoading, hasMore, data: tracklists } = useTracklists(page);

  return (
    <>
      {isLoading.value
        ? [0, 1, 2, 3, 4].map(() => (
            <TracklistItem key={crypto.randomUUID()} loading />
          ))
        : tracklists.value?.map(({ id, name, date, artwork, trackCount }) => (
            <TracklistItem
              key={id}
              id={id}
              name={name}
              date={new Date(date)}
              artwork={artwork}
              trackCount={trackCount}
            />
          ))}

      {path && <Pagination path={path} page={page} hasMore={hasMore.value} />}
    </>
  );
}

export default Index;
