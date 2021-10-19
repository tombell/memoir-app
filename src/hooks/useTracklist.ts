import { useEffect, useState } from "preact/hooks";

import { fetchTracklist } from "services/memoir/tracklists";

import { Tracklist } from "services/memoir/types";

export default (id: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [tracklist, setTracklist] = useState<Tracklist | null>(null);

  useEffect(() => {
    const fn = async () => {
      setIsLoading(true);
      const resp = await fetchTracklist(id);
      setIsLoading(false);

      if (resp) {
        resp.date = new Date(resp.date);
        setTracklist(resp);
      }
    };

    fn();
  }, [id]);

  return { isLoading, tracklist };
};
