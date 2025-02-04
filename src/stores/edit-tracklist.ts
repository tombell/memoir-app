import { map } from "nanostores";
import { ZodError } from "zod";

import { patch } from "~/services/memoir";
import {
  type EditTracklist,
  editTracklistSchema,
} from "~/services/memoir/types";

import { createMutatorStore } from "~/stores/fetcher";

export const $validationErrors = map<Record<string, string[] | undefined>>();

export const $data = map<EditTracklist>({
  id: "",
  name: "",
  date: "",
  url: "",
});

$data.listen((_, __, changed) => $validationErrors.setKey(changed, undefined));

export const $editTracklist = createMutatorStore<EditTracklist>(
  async ({ data: tracklist, revalidate }) => {
    revalidate(`/tracklists/${tracklist.id}`);
    return patch<EditTracklist>(`/tracklists/${tracklist.id}`, tracklist);
  },
);

export const validate = () => {
  try {
    return editTracklistSchema.parse($data.get());
  } catch (err) {
    if (err instanceof ZodError) {
      $validationErrors.set(err.flatten().fieldErrors);
    }

    return null;
  }
};
