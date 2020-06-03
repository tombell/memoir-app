import { h } from 'preact';
import { RoutableProps } from 'preact-router';
import { useEffect, useState } from 'preact/hooks';

import API, { Track } from 'memoir-api';

import Footer from 'components/Footer';
import Loading from 'components/Loading';
import TrackItem from 'components/TrackItem';

interface Props extends RoutableProps {
  api: API;
}

export default ({ api }: Props) => {
  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState<Track[] | null>(null);

  let timer: NodeJS.Timeout;

  useEffect(() => {
    const fn = async () => {
      timer = setTimeout(() => setLoading(true), 1000);
      const resp = await api.fetchMostPlayedTracks();
      setLoading(false);
      clearTimeout(timer);
      setTracks(resp);
    };

    fn();
  }, []);

  return (
    <div class="most-played">
      <h2 class="most-played__header">Most Played Tracks</h2>
      {loading && <Loading />}
      {tracks && tracks.map((track) => <TrackItem track={track} />)}
      <Footer />
    </div>
  );
};
