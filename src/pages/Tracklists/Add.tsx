import { Signal, computed, useSignal } from "@preact/signals";
import { FunctionalComponent } from "preact";
import { useCallback } from "preact/hooks";
import { route } from "preact-router";

import ArtworkUploader from "components/ArtworkUploader";
import Button from "components/Button";
import Input from "components/Input";
import Subheader from "components/Subheader";
import TracklistPicker from "components/TracklistPicker";

import { postTracklist } from "services/memoir";
import { NewTracklist } from "services/memoir/types";

const handleChange =
  <T,>(signal: Signal<T>) =>
  (value: T) => {
    signal.value = value;
  };

const Add: FunctionalComponent = () => {
  const name = useSignal("");
  const date = useSignal("");
  const url = useSignal("");
  const artwork = useSignal("");
  const tracks = useSignal<string[][]>([]);

  const tracklist = computed<NewTracklist>(() => ({
    name: name.value,
    date: `${date.value}T00:00:00Z`,
    url: url.value,
    artwork: artwork.value,
    tracks: tracks.value,
  }));

  const handleSubmit = useCallback(async () => {
    const resp = await postTracklist(tracklist.value);

    if (resp) {
      route(`/tracklist/${resp.id}/edit`);
    }
  }, [tracklist.value]);

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
          {/* TODO: refactor into label component */}
          <h3 class="mb-2 font-bold text-white">Artwork</h3>
          <ArtworkUploader onUpload={handleChange(artwork)} />
        </div>

        <div>
          {/* TODO: refactor into label component */}
          <h3 class="mb-2 font-bold text-white">Tracklist</h3>
          <TracklistPicker onSelect={handleChange(tracks)} />
        </div>

        <Button text="Add" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Add;
