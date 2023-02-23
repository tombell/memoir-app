import { batch, useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

import { request } from "services/memoir";

export default <T>(url: string) => {
  const isLoading = useSignal(false);
  const data = useSignal<T | null>(null);
  const hasMore = useSignal(false);

  useEffect(() => {
    batch(async () => {
      isLoading.value = true;

      const resp = await request(url);
      const json = await resp.json();
      const current = resp.headers.get("Current-Page");
      const total = resp.headers.get("Total-Pages");

      data.value = json;

      if (current && total) {
        hasMore.value = parseInt(current, 10) < parseInt(total, 10);
      }

      isLoading.value = false;
    });
  }, [url, isLoading, data, hasMore]);

  return {
    isLoading: isLoading.value,
    data: data.value,
    hasMore: hasMore.value,
  };
};
