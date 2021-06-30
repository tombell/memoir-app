import { h, Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";
import { RoutableProps } from "preact-router";
import { css } from "g-style";

import { fetchTracklist } from "services/memoir/tracklists";

import { Track, Tracklist } from "services/memoir/types";

import Footer from "components/Footer";
import Genres from "components/organisms/Genres";
import Link from "components/molecules/Link";
import Loading from "components/Loading";
import Subheader from "components/molecules/Subheader";
import TrackItem from "components/organisms/TrackItem";

const linkClassName = css({
  marginBottom: "1rem",
  fontSize: "0.8125rem",
  fontWeight: 600,
  textAlign: "center",
});

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
    <>
      {loading && <Loading />}

      {tracklist && (
        <>
          <Subheader text={tracklist.name} />

          <div class={linkClassName}>
            <Link href={tracklist.url}>Listen on Mixcloud &rarr;</Link>
          </div>

          {tracklist.tracks && (
            <>
              <>
                <Genres
                  genres={[
                    ...new Set(
                      tracklist.tracks.map((track: Track) => track.genre)
                    ),
                  ]}
                />
              </>

              <>
                {tracklist.tracks.map((track) => (
                  <TrackItem
                    id={track.id}
                    artist={track.artist}
                    name={track.name}
                    genre={track.genre}
                    bpm={track.bpm}
                    camelotKey={track.key}
                  />
                ))}
              </>
            </>
          )}
        </>
      )}

      <Footer />
    </>
  );
};
