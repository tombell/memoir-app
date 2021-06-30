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
      const resp = await fetchTracklists(page);
      setIsLoading(false);

      if (resp) {
        setHasMore(resp.hasMore);
        setTracklists(resp.tracklists);
      }
    };

    fn();
  }, [page]);

  return { isLoading, hasMore, tracklists };
};
