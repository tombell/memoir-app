import { h, FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";

import { fetchMostPlayedTracks } from "services/memoir/tracks";
import { Track } from "services/memoir/types";

import Loading from "components/Loading";
import Subheader from "components/molecules/Subheader";
import TrackItem from "components/organisms/TrackItem";

const MostPlayedTracks: FunctionalComponent = () => {
  const [loading, setLoading] = useState(false);
  const [tracks, setTracks] = useState<Track[] | null>(null);

  let timer: NodeJS.Timeout;

  useEffect(() => {
    const fn = async () => {
      timer = setTimeout(() => setLoading(true), 1000);
      const resp = await fetchMostPlayedTracks();
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
    </div>
  );
};

export default MostPlayedTracks;
