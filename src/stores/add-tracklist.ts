import { map } from "nanostores";
import * as z from "zod/mini";

import { post } from "~/services/memoir";
import { type NewTracklist, newTracklistSchema } from "~/services/memoir/types";

import { createMutatorStore } from "~/stores/fetcher";

export const $validationErrors = map<Record<string, string[] | undefined>>();

export const $data = map<NewTracklist>({
  name: "",
  date: "",
  url: "",
  artwork: "",
  tracks: [],
});

$data.listen((_, __, changed) => $validationErrors.setKey(changed, undefined));

export const $addTracklist = createMutatorStore<NewTracklist>(
  async ({ data: tracklist, revalidate }) => {
    revalidate("/tracklists");
    return post<NewTracklist>("/tracklists", tracklist);
  },
  { throttleCalls: false },
);

export const validate = () => {
  const result = newTracklistSchema.safeParse($data.get());

  if (result.error) {
    $validationErrors.set(z.flattenError(result.error).fieldErrors);
    return null;
  }

  return result.data;
};
