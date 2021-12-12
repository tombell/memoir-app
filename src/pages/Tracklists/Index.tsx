import { Fragment, h } from "preact";
import { RoutableProps, route } from "preact-router";

import Pagination from "components/molecules/Pagination";

import TracklistItem from "components/organisms/TracklistItem";
import TracklistItemSkeleton from "components/organisms/TracklistItemSkeleton";

import useTracklists from "hooks/useTracklists";

interface Props extends RoutableProps {
  page?: string;
}

export default ({ path, page }: Props) => {
  const pageNum = parseInt(page || "1", 10);

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(pageNum)) {
    route("/404", true);
    return null;
  }

  const { isLoading, hasMore, tracklists } = useTracklists(pageNum);

  return (
    <>
      {isLoading && [0, 1, 2, 3, 4].map(() => <TracklistItemSkeleton />)}

      {!isLoading &&
        tracklists?.map(({ id, name, date, artwork, trackCount }) => (
          <TracklistItem
            key={id}
            id={id}
            name={name}
            date={date}
            artwork={artwork}
            trackCount={trackCount}
          />
        ))}

      <Pagination path={path!} page={pageNum} hasMore={hasMore} />
    </>
  );
};
