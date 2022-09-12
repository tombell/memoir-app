import { signal } from "@preact/signals";
import { useCallback } from "preact/hooks";
import { route } from "preact-router";

import ArtworkUploader from "components/ArtworkUploader";
import Button from "components/Button";
import Input from "components/Input";
import Subheader from "components/Subheader";
import TracklistPicker from "components/TracklistPicker";

import { postTracklist } from "services/memoir";
import { NewTracklist } from "services/memoir/types";

const tracklist = signal<NewTracklist>({
  name: "",
  date: "",
  url: "",
  artwork: "",
  tracks: [],
});

const Add = () => {
  const handleNameInput = useCallback((e: Event) => {
    tracklist.value.name = (e.target as HTMLInputElement).value;
  }, []);

  const handleDateInput = useCallback((e: Event) => {
    tracklist.value.date = `${(e.target as HTMLInputElement).value}T00:00:00Z`;
  }, []);

  const handleUrlInput = useCallback((e: Event) => {
    tracklist.value.url = (e.target as HTMLInputElement).value;
  }, []);

  const handleUpload = useCallback((filename: string) => {
    tracklist.value.artwork = filename;
  }, []);

  const handleSelect = useCallback((tracks: string[][]) => {
    tracklist.value.tracks = tracks;
  }, []);

  const handleSubmit = useCallback(async () => {
    const resp = await postTracklist(tracklist.value);

    if (resp) {
      route(`/tracklists/edit/${resp.id}`);
    }
  }, []);

  return (
    <>
      <div class="mb-4">
        <Subheader text="Add Tracklist" center />
      </div>

      <div class="space-y-4">
        <Input
          name="name"
          label="Name"
          placeholder="Name..."
          onInput={handleNameInput}
        />
        <Input
          name="date"
          label="Date"
          placeholder="Date..."
          type="date"
          onInput={handleDateInput}
        />
        <Input
          name="url"
          label="Mixcloud URL"
          placeholder="Mixcloud URL..."
          onInput={handleUrlInput}
        />

        <div>
          <h3 class="mb-2 font-bold text-white">Artwork</h3>
          <ArtworkUploader onUpload={handleUpload} />
        </div>

        <div>
          <h3 class="mb-2 font-bold text-white">Tracklist</h3>
          <TracklistPicker onSelect={handleSelect} />
        </div>

        <div class="mt-2">
          <Button text="Add" onClick={handleSubmit} />
        </div>
      </div>
    </>
  );
};

export default Add;
