import { map } from "nanostores";
import { ZodError } from "zod";

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
);

export const validate = () => {
  try {
    return newTracklistSchema.parse($data.get());
  } catch (err) {
    if (err instanceof ZodError) {
      $validationErrors.set(err.flatten().fieldErrors);
    }

    return null;
  }
};
