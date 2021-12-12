import { Fragment, h } from "preact";
import { RoutableProps, route } from "preact-router";

import Pagination from "components/molecules/Pagination";

import TracklistItem from "components/organisms/TracklistItem";
import TracklistItemSkeleton from "components/organisms/TracklistItemSkeleton";

import useTracklistsByTrack from "hooks/useTracklistsByTrack";

interface Props extends RoutableProps {
  id?: string;
  page?: string;
}

export default ({ path, id, page }: Props) => {
  const pageNum = parseInt(page || "1", 10);

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(pageNum)) {
    route("/404", true);
    return null;
  }

  const { isLoading, hasMore, tracklists } = useTracklistsByTrack(id!, pageNum);

  return (
    <>
      {isLoading && [0, 1, 2, 3, 4].map(() => <TracklistItemSkeleton />)}

      {!isLoading &&
        tracklists?.map(({ id: trackId, name, date, artwork, trackCount }) => (
          <TracklistItem
            key={trackId}
            id={trackId}
            name={name}
            date={date}
            artwork={artwork}
            trackCount={trackCount}
          />
        ))}

      <Pagination path={path!} id={id} page={pageNum} hasMore={hasMore} />
    </>
  );
};
