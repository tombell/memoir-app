import { useEffect, useState } from "preact/hooks";

import { request } from "services/memoir";

export default <T>(url: string | null, page?: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    if (!url) {
      return;
    }

    const fn = async () => {
      setIsLoading(true);

      const resp = await request(`${url}${page ? `?page=${page}` : ""}`);
      const json = await resp.json();

      setIsLoading(false);
      setData(json);

      if (!page) {
        return;
      }

      const current = resp.headers.get("Current-Page");
      const total = resp.headers.get("Total-Pages");

      if (current && total) {
        setHasMore(parseInt(current, 10) < parseInt(total, 10));
      }
    };

    fn();
  }, [url, page]);

  return { isLoading, data, hasMore };
};
