import { h } from "preact";
import { RoutableProps } from "preact-router";
import { useEffect, useState } from "preact/hooks";

import API, { Track } from "services/memoir";

import Footer from "components/Footer";
import Loading from "components/Loading";
import Subheader from "components/Subheader";
import TrackItem from "components/organisms/TrackItem";

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
      <Subheader text="Most Played Tracks" />
      {loading && <Loading />}
      {tracks &&
        tracks.map((track) => (
          <TrackItem
            id={track.id}
            artist={track.artist}
            name={track.name}
            genre={track.genre}
            bpm={track.bpm}
            camelotKey={track.key}
          />
        ))}
      <Footer />
    </div>
  );
};
