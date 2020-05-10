import { h, Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { RoutableProps } from 'preact-router';

import { fetchTracklist, Tracklist, Track } from 'services/memoir';

import Footer from 'components/Footer';
import Genres from 'components/Genres';
import Loading from 'components/Loading';
import TrackItem from 'components/TrackItem';

interface Props extends RoutableProps {
  id?: string;
}

export default ({ id }: Props) => {
  const [loading, setLoading] = useState(false);
  const [tracklist, setTracklist] = useState<Tracklist | null>(null);

  let timer: NodeJS.Timeout;

  useEffect(() => {
    const fn = async () => {
      timer = setTimeout(() => setLoading(true), 1000);
      const resp = await fetchTracklist(id!);
      setLoading(false);
      clearTimeout(timer);
      setTracklist(resp);
    };

    fn();
  }, []);

  if (!tracklist) {
    return null;
  }

  return (
    <div class="tracklist">
      {loading && <Loading />}
      {tracklist && (
        <Fragment>
          <h2 class="tracklist__header">{tracklist.name}</h2>
          <div class="tracklist__link">
            <a href={tracklist.url}>Listen on Mixcloud &rarr;</a>
          </div>
          {tracklist.tracks && (
            <Fragment>
              <div class="tracklist__genres">
                <Genres
                  genres={[
                    ...new Set(
                      tracklist.tracks.map((track: Track) => track.genre)
                    ),
                  ]}
                />
              </div>
              <div class="tracklist__tracks">
                {tracklist.tracks.map((track) => (
                  <TrackItem track={track} />
                ))}
              </div>
            </Fragment>
          )}
        </Fragment>
      )}
      <Footer />
    </div>
  );
};
