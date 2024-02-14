import { RoutableProps } from "preact-router";

import Pagination from "@components/Pagination";
import TracklistItem from "@components/TracklistItem";

import { useTracklists } from "@hooks/memoir";

const Index = ({ path }: RoutableProps) => {
  const params = new URLSearchParams(window.location.search);
  const page = parseInt(params.get("page") || "1", 10);

  const { isLoading, hasMore, data: tracklists } = useTracklists(page);

  return (
    <>
      {isLoading.value
        ? [0, 1, 2, 3, 4].map(() => <TracklistItem loading />)
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

      <Pagination path={path!} page={page} hasMore={hasMore.value} />
    </>
  );
};

export default Index;
