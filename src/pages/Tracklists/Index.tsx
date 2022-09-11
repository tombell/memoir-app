import { RoutableProps, route } from "preact-router";

import Pagination from "components/Pagination";
import TracklistItem from "components/TracklistItem";

import useGetResource from "hooks/useGetResource";

import { Tracklist } from "services/memoir/types";

interface Props extends RoutableProps {
  page?: string;
}

const Index = ({ path, page }: Props) => {
  const pageNum = parseInt(page!, 10);

  if (Number.isNaN(pageNum)) {
    route("/404", true);
  }

  const {
    isLoading,
    hasMore,
    data: tracklists,
  } = useGetResource<Tracklist[]>("/tracklists", pageNum);

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

      <Pagination path={path!} page={pageNum} hasMore={hasMore.value} />
    </>
  );
};

export default Index;
