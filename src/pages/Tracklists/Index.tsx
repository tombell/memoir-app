import { Fragment, h } from "preact";
import { RoutableProps, route } from "preact-router";

import Pagination from "components/molecules/Pagination";

import TracklistItem from "components/organisms/TracklistItem";

import useGetResources from "hooks/useGetResources";

import { Tracklist } from "services/memoir/types";

interface Props extends RoutableProps {
  page?: string;
}

export default ({ path, page }: Props) => {
  const pageNum = parseInt(page || "1", 10);

  if (Number.isNaN(pageNum)) {
    route("/404", true);
    return null;
  }

  const {
    isLoading,
    hasMore,
    data: tracklists,
  } = useGetResources<Tracklist[]>("/tracklists", pageNum);

  return (
    <>
      {isLoading && [0, 1, 2, 3, 4].map(() => <TracklistItem loading />)}

      {!isLoading &&
        tracklists?.map(({ id, name, date, artwork, trackCount }) => (
          <TracklistItem
            key={id}
            id={id}
            name={name}
            date={new Date(date)}
            artwork={artwork}
            trackCount={trackCount}
          />
        ))}

      <Pagination path={path!} page={pageNum} hasMore={hasMore} />
    </>
  );
};
