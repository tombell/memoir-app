import { batch, signal, useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

import { request } from "services/memoir";

const isLoading = signal(false);
const hasMore = signal(false);

export default <T>(url: string | null, page?: number) => {
  const data = useSignal<T | null>(null);

  useEffect(() => {
    if (!url) {
      return;
    }

    const fn = async () => {
      isLoading.value = true;

      const resp = await request(`${url}${page ? `?page=${page}` : ""}`);
      const json = await resp.json();

      const current = resp.headers.get("Current-Page");
      const total = resp.headers.get("Total-Pages");

      batch(() => {
        data.value = json;
        isLoading.value = false;

        if (current && total) {
          hasMore.value = parseInt(current, 10) < parseInt(total, 10);
        }
      });
    };

    fn();
  }, [url, page, data]);

  return {
    isLoading: isLoading.value,
    data: data.value,
    hasMore: hasMore.value,
  };
};
