import { useEffect, useState } from "preact/hooks";

import { fetchMostPlayedTracks } from "services/memoir/tracks";

import { Track } from "services/memoir/types";

export default () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tracks, setTracks] = useState<Track[] | null>(null);

  useEffect(() => {
    const fn = async () => {
      setIsLoading(true);
      const resp = await fetchMostPlayedTracks();
      setIsLoading(false);

      if (resp) {
        setTracks(resp);
      }
    };

    fn();
  }, []);

  return { isLoading, tracks };
};
