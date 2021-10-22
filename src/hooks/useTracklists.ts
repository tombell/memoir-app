import { useEffect, useState } from "preact/hooks";

import { fetchTracklists } from "services/memoir/tracklists";
import { Tracklist } from "services/memoir/types";

export default (page: number = 1) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [tracklists, setTracklists] = useState<Tracklist[] | null>(null);

  useEffect(() => {
    const fn = async () => {
      setIsLoading(true);
      const [resp, more] = await fetchTracklists(page);
      setIsLoading(false);

      if (resp) {
        resp.forEach((tracklist) => {
          // eslint-disable-next-line no-param-reassign
          tracklist.date = new Date(tracklist.date);
        });

        setTracklists(resp);
        setHasMore(more);
      }
    };

    fn();
  }, [page]);

  return { isLoading, hasMore, tracklists };
};
