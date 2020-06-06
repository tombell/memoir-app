import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { route, RoutableProps } from 'preact-router';

import API, { Tracklist } from 'memoir-api';

import Footer from 'components/Footer';
import Loading from 'components/Loading';
import Pagination from 'components/Pagination';
import TracklistItem from 'components/TracklistItem';

interface Props extends RoutableProps {
  page?: string;
  api: API;
}

export default ({ path, page, api }: Props) => {
  const [loading, setLoading] = useState(false);
  const [tracklists, setTracklists] = useState<Tracklist[] | null>(null);
  const [hasMore, setHasMore] = useState(false);

  let timer: NodeJS.Timeout;

  useEffect(() => {
    const fn = async () => {
      const pageNum = parseInt(page!, 10);

      if (isNaN(pageNum)) {
        route('/404', true);
        return;
      }

      timer = setTimeout(() => setLoading(true), 1000);
      const resp = await api.fetchTracklists(parseInt(page!, 10));
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
      {loading && <Loading />}
      {tracklists &&
        tracklists.map((tracklist) => <TracklistItem tracklist={tracklist} />)}
      <Pagination path={path!} page={parseInt(page!, 10)} hasMore={hasMore} />
      <Footer />
    </div>
  );
};
