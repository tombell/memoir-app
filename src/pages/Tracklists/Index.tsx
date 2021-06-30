import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { route, RoutableProps } from "preact-router";
import { css } from "g-style";

import { fetchTracklists } from "services/memoir/tracklists";

import { Tracklist } from "services/memoir/types";

import Footer from "components/Footer";
import Loading from "components/Loading";
import Pagination from "components/organisms/Pagination";
import TracklistItem from "components/organisms/TracklistItem";

const className = css({
  minHeight: "33.625rem",
});

interface Props extends RoutableProps {
  page?: string;
}

export default ({ path, page }: Props) => {
  const [loading, setLoading] = useState(false);
  const [tracklists, setTracklists] = useState<Tracklist[] | null>(null);
  const [hasMore, setHasMore] = useState(false);

  let timer: NodeJS.Timeout;

  useEffect(() => {
    const fn = async () => {
      const pageNum = parseInt(page!, 10);

      // eslint-disable-next-line no-restricted-globals
      if (isNaN(pageNum)) {
        route("/404", true);
        return;
      }

      timer = setTimeout(() => setLoading(true), 1000);
      const resp = await fetchTracklists(parseInt(page!, 10));
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
    <div class={className}>
      {loading && <Loading />}

      {tracklists &&
        tracklists.map(({ id, name, date, artwork, trackCount }) => (
          <TracklistItem
            key={id}
            id={id}
            name={name}
            date={date}
            artwork={artwork}
            trackCount={trackCount}
          />
        ))}

      <Pagination path={path!} page={parseInt(page!, 10)} hasMore={hasMore} />

      <Footer />
    </div>
  );
};
