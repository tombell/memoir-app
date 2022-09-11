import { RoutableProps, route } from "preact-router";

import Pagination from "components/Pagination";
import TracklistItem from "components/TracklistItem";

import useGetResource from "hooks/useGetResource";

import { Tracklist } from "services/memoir/types";

interface Props extends RoutableProps {
  id?: string;
  page?: string;
}

const TracklistsByTrack = ({ path, id, page }: Props) => {
  const pageNum = parseInt(page || "1", 10);

  if (Number.isNaN(pageNum)) {
    route("/404", true);
  }

  const {
    isLoading,
    hasMore,
    data: tracklists,
  } = useGetResource<Tracklist[]>(`/tracks/${id!}/tracklists`, pageNum);

  return (
    <>
      {isLoading.value
        ? [0, 1, 2, 3, 4].map(() => <TracklistItem loading />)
        : tracklists.value?.map(
            ({ id: trackId, name, date, artwork, trackCount }) => (
              <TracklistItem
                key={trackId}
                id={trackId}
                name={name}
                date={new Date(date)}
                artwork={artwork}
                trackCount={trackCount}
              />
            )
          )}

      <Pagination path={path!} id={id} page={pageNum} hasMore={hasMore.value} />
    </>
  );
};

export default TracklistsByTrack;
