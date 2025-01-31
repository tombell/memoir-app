import { nanoquery } from "@nanostores/query";

import { get } from "~/services/memoir";

export const [createFetcherStore, createMutatorStore] = nanoquery({
  fetcher: async (...keys) => get(keys.join("")),
});
