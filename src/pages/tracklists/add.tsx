import { useStore } from "@nanostores/preact";
import { redirectPage } from "@nanostores/router";
import { useCallback } from "preact/hooks";

import ArtworkUploader from "~/components/artwork-uploader";
import Button from "~/components/button";
import Input from "~/components/input";
import Subheader from "~/components/subheader";
import TracklistPicker from "~/components/tracklist-picker";

import type { APIResponse } from "~/services/memoir";
import type { Tracklist } from "~/services/memoir/types";

import { $addTracklist, $data, $validationErrors, validate } from "~/stores/add-tracklist";
import { $router } from "~/stores/router";

export default function Add() {
  const errors = useStore($validationErrors);

  const handleSubmit = useCallback(async () => {
    const payload = validate();

    if (payload) {
      const {
        data: { id },
      } = (await $addTracklist.mutate(payload)) as APIResponse<Tracklist>;

      redirectPage($router, "tracklistsShow", { id });
    }
  }, [$addTracklist]);

  return (
    <div class="space-y-4">
      <Subheader text="Add Tracklist" center />

      <div class="space-y-4">
        <Input
          name="name"
          label="Name"
          placeholder="Name..."
          errors={errors.name}
          onInput={(v) => $data.setKey("name", v)}
        />

        <Input
          name="date"
          label="Date"
          placeholder="Date..."
          type="date"
          errors={errors.date}
          onInput={(v) => $data.setKey("date", `${v}T00:00:00Z`)}
        />

        <Input
          name="url"
          label="Mixcloud URL"
          placeholder="Mixcloud URL..."
          errors={errors.url}
          onInput={(v) => $data.setKey("url", v)}
        />

        <ArtworkUploader
          name="artwork-uploader"
          label="Artwork"
          errors={errors.artwork}
          onUpload={(v) => $data.setKey("artwork", v)}
        />

        <TracklistPicker
          name="tracklist"
          label="Tracklist"
          errors={errors.tracks}
          onSelect={(v) => $data.setKey("tracks", v)}
        />

        <Button text="Add" onClick={handleSubmit} />
      </div>
    </div>
  );
}
