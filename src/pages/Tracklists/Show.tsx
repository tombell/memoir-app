import { h, Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";
import { RoutableProps } from "preact-router";
import { css } from "g-style";

import API, { Track, Tracklist } from "services/memoir";

import Footer from "components/Footer";
import Genres from "components/Genres";
import Link from "components/Link";
import Loading from "components/Loading";
import Subheader from "components/Subheader";
import TrackItem from "components/TrackItem";

const linkClassName = css({
  marginBottom: "1rem",
  fontSize: "0.8125rem",
  fontWeight: 600,
  textAlign: "center",
});

interface Props extends RoutableProps {
  id?: string;
  api: API;
}

export default ({ id, api }: Props) => {
  const [loading, setLoading] = useState(false);
  const [tracklist, setTracklist] = useState<Tracklist | null>(null);

  let timer: NodeJS.Timeout;

  useEffect(() => {
    const fn = async () => {
      timer = setTimeout(() => setLoading(true), 1000);
      const resp = await api.fetchTracklist(id!);
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
    <div>
      {loading && <Loading />}
      {tracklist && (
        <Fragment>
          <Subheader text={tracklist.name} />

          <div class={linkClassName}>
            <Link href={tracklist.url}>Listen on Mixcloud &rarr;</Link>
          </div>

          {tracklist.tracks && (
            <Fragment>
              <div>
                <Genres
                  genres={[
                    ...new Set(
                      tracklist.tracks.map((track: Track) => track.genre)
                    ),
                  ]}
                />
              </div>

              <div>
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
