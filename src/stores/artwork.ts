import { postFile } from "~/services/memoir";
import type { Artwork } from "~/services/memoir/types";

import { createMutatorStore } from "~/stores/fetcher";

export const createAddArtworkStore = () => () =>
  createMutatorStore<FormData>(async ({ data: artwork }) => {
    return postFile<Artwork>("/artwork", artwork);
  });
