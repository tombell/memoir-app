import { useEffect, useState } from "preact/hooks";

import { request } from "services/memoir";

export default <T>(url: string | null) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    if (!url) {
      return;
    }

    const fn = async () => {
      setIsLoading(true);
      const resp = await request(url);
      const json = await resp.json();
      setIsLoading(false);
      setData(json);
    };

    fn();
  }, [url]);

  return { isLoading, data };
};
