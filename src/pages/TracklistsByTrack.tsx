import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { RoutableProps } from "preact-router";

import { fetchTracklistsByTrack } from "services/memoir/tracklists";

import { Tracklist } from "services/memoir/types";

import Footer from "components/Footer";
import Loading from "components/Loading";
import Pagination from "components/organisms/Pagination";
import TracklistItem from "components/organisms/TracklistItem";

interface Props extends RoutableProps {
  id?: string;
  page?: string;
}

export default ({ path, id, page }: Props) => {
  const [loading, setLoading] = useState(false);
  const [tracklists, setTracklists] = useState<Tracklist[] | null>(null);
  const [hasMore, setHasMore] = useState(false);

  let timer: NodeJS.Timeout;

  useEffect(() => {
    const fn = async () => {
      timer = setTimeout(() => setLoading(true), 1000);
      const resp = await fetchTracklistsByTrack(id!, parseInt(page || "1", 10));
      setLoading(false);
      clearTimeout(timer);

      if (resp) {
        setTracklists(resp.tracklists);
        setHasMore(resp.hasMore);
      }
    };

    fn();
  }, [page]);

  return (
    <div class="tracklists">
      {tracklists &&
        tracklists.map(({ id: trackId, name, date, artwork, trackCount }) => (
          <TracklistItem
            key={trackId}
            id={trackId}
            name={name}
            date={date}
            artwork={artwork}
            trackCount={trackCount}
          />
        ))}

      {loading && <Loading />}

      <Pagination
        path={path!}
        id={id}
        page={parseInt(page || "1", 10)}
        hasMore={hasMore}
      />

      <Footer />
    </div>
  );
};
