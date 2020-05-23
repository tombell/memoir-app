import { h, FunctionalComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import API, { Track } from 'memoir-api';

import Footer from 'components/Footer';
import Loading from 'components/Loading';
import TrackItem from 'components/TrackItem';

const MostPlayedTracks: FunctionalComponent = () => {
  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState<Track[] | null>(null);

  const api = new API(MEMOIR_API_URL);

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

export default MostPlayedTracks;
