import { Fragment, h } from "preact";
import { RoutableProps, route } from "preact-router";

import Pagination from "components/molecules/Pagination";

import TracklistItem from "components/organisms/TracklistItem";

import useGetResources from "hooks/useGetResources";

import { Tracklist } from "services/memoir/types";

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

  const {
    isLoading,
    hasMore,
    data: tracklists,
  } = useGetResources<Tracklist[]>(`/tracks/${id!}/tracklists`, pageNum);

  return (
    <>
      {isLoading && [0, 1, 2, 3, 4].map(() => <TracklistItem loading />)}

      {!isLoading &&
        tracklists?.map(({ id: trackId, name, date, artwork, trackCount }) => (
          <TracklistItem
            key={trackId}
            id={trackId}
            name={name}
            date={new Date(date)}
            artwork={artwork}
            trackCount={trackCount}
          />
        ))}

      <Pagination path={path!} id={id} page={pageNum} hasMore={hasMore} />
    </>
  );
};
