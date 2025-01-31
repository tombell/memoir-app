import { useStore } from "@nanostores/preact";
import { atom } from "nanostores";
import type { FunctionalComponent } from "preact";
import { route } from "preact-router";
import { useCallback, useState } from "preact/hooks";

import ArtworkUploader from "~/components/ArtworkUploader";
import Button from "~/components/Button";
import Input from "~/components/Input";
import Subheader from "~/components/Subheader";
import TracklistPicker from "~/components/TracklistPicker";

import type { APIResponse } from "~/services/memoir";
import type { NewTracklist, Tracklist } from "~/services/memoir/types";

import { createAddTracklistStore } from "~/stores/tracklists";

function Add() {
  const $tracklist = atom<NewTracklist>({
    name: "",
    date: "",
    url: "",
    artwork: "",
    tracks: [],
  });

  const [$addTracklist] = useState(createAddTracklistStore());

  const { mutate } = useStore($addTracklist);

  const handleSubmit = useCallback(async () => {
    const resp = (await mutate($tracklist.value)) as APIResponse<Tracklist>;

    if (resp?.data) {
      route(`/tracklist/${resp.data.id}/edit`);
    }
  }, [mutate, $tracklist.value]);

  return (
    <div class="space-y-4">
      <Subheader text="Add Tracklist" center />

      <div class="space-y-4">
        <Input
          name="name"
          label="Name"
          placeholder="Name..."
          onInput={(val) => {
            $tracklist.value.name = val;
          }}
        />

        <Input
          name="date"
          label="Date"
          placeholder="Date..."
          type="date"
          onInput={(val) => {
            $tracklist.value.date = `${val}T00:00:00Z`;
          }}
        />

        <Input
          name="url"
          label="Mixcloud URL"
          placeholder="Mixcloud URL..."
          onInput={(val) => {
            $tracklist.value.url = val;
          }}
        />

        <div>
          <ArtworkUploader
            name="artwork-uploader"
            label="Artwork"
            onUpload={(val) => {
              $tracklist.value.artwork = val;
            }}
          />
        </div>

        <div>
          <TracklistPicker
            name="tracklist"
            label="Tracklist"
            onSelect={(val) => {
              $tracklist.value.tracks = val;
            }}
          />
        </div>

        <Button text="Add" onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default Add as FunctionalComponent;
