import { type Signal, useComputed, useSignal } from "@preact/signals";
import type { FunctionalComponent } from "preact";
import { route } from "preact-router";
import { useCallback } from "preact/hooks";

import ArtworkUploader from "$/components/ArtworkUploader";
import Button from "$/components/Button";
import Input from "$/components/Input";
import Subheader from "$/components/Subheader";
import TracklistPicker from "$/components/TracklistPicker";

import type { NewTracklist } from "$/services/memoir/types";

import { usePostTracklist } from "$/hooks/memoir";

const handleChange =
  <T,>(signal: Signal<T>) =>
  (val: T) => {
    signal.value = val;
  };

export default function Add() {
  const name = useSignal("");
  const date = useSignal("");
  const url = useSignal("");
  const artwork = useSignal("");
  const tracks = useSignal<string[][]>([]);

  const tracklist = useComputed<NewTracklist>(() => ({
    name: name.value,
    date: `${date.value}T00:00:00Z`,
    url: url.value,
    artwork: artwork.value,
    tracks: tracks.value,
  }));

  const { perform: postTracklist } = usePostTracklist();

  const handleSubmit = useCallback(async () => {
    const resp = await postTracklist(tracklist.value);

    if (resp) {
      route(`/tracklist/${resp.id}/edit`);
    }
  }, [postTracklist, tracklist.value]);

  return (
    <div class="space-y-4">
      <Subheader text="Add Tracklist" center />

      <div class="space-y-4">
        <Input
          name="name"
          label="Name"
          placeholder="Name..."
          onInput={handleChange(name)}
        />

        <Input
          name="date"
          label="Date"
          placeholder="Date..."
          type="date"
          onInput={handleChange(date)}
        />

        <Input
          name="url"
          label="Mixcloud URL"
          placeholder="Mixcloud URL..."
          onInput={handleChange(url)}
        />

        <div>
          <ArtworkUploader
            name="artwork-uploader"
            label="Artwork"
            onUpload={handleChange(artwork)}
          />
        </div>

        <div>
          <TracklistPicker
            name="tracklist"
            label="Tracklist"
            onSelect={handleChange(tracks)}
          />
        </div>

        <Button text="Add" onClick={handleSubmit} />
      </div>
    </div>
  );
}
