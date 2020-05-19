import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { RoutableProps } from 'preact-router';

import { fetchTracklistsByTrack, Tracklist } from 'services/memoir';

import Footer from 'components/Footer';
import Loading from 'components/Loading';
import Pagination from 'components/Pagination';
import TracklistItem from 'components/TracklistItem';

interface Props extends RoutableProps {
  id?: string;
  page?: string;
}

export default ({ id, page, path }: Props) => {
  const [loading, setLoading] = useState(false);
  const [tracklists, setTracklists] = useState<Tracklist[] | null>(null);
  const [hasMore, setHasMore] = useState(false);

  let timer: NodeJS.Timeout;

  useEffect(() => {
    const fn = async () => {
      timer = setTimeout(() => setLoading(true), 1000);
      const resp = await fetchTracklistsByTrack(id!, parseInt(page || '1', 10));
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
        tracklists.map((tracklist) => <TracklistItem tracklist={tracklist} />)}
      {loading && <Loading />}
      <Pagination
        path={path!}
        id={id}
        page={parseInt(page || '1', 10)}
        hasMore={hasMore}
      />
      <Footer />
    </div>
  );
};
