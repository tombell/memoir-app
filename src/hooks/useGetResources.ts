import { useEffect, useState } from "preact/hooks";

import { request } from "services/memoir";

export default <T>(url: string | null, page: number = 1) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    if (!url) {
      return;
    }

    const fn = async () => {
      setIsLoading(true);
      const resp = await request(`${url}?page=${page}`);
      const json = await resp.json();
      const current = resp.headers.get("Current-Page");
      const total = resp.headers.get("Total-Pages");
      setIsLoading(false);
      setHasMore(parseInt(current!, 10) < parseInt(total!, 10));
      setData(json);
    };

    fn();
  }, [url, page]);

  return { isLoading, hasMore, data };
};
