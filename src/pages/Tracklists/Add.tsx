import { Fragment, FunctionalComponent, h } from "preact";
import { route } from "preact-router";
import { useCallback, useState } from "preact/hooks";

import Button from "components/molecules/Button";
import Subheader from "components/molecules/Subheader";
import Input from "components/molecules/form/Input";

import ArtworkUploader from "components/organisms/ArtworkUploader";
import TracklistPicker from "components/organisms/TracklistPicker";

import { postTracklist } from "services/memoir/tracklists";
import { NewTracklist } from "services/memoir/types";

const Add: FunctionalComponent = () => {
  const [tracklist, setTracklist] = useState<NewTracklist>({
    name: "",
    date: "",
    url: "",
    artwork: "",
    tracks: [],
  });

  const handleNameInput = useCallback(
    (e: Event) => {
      tracklist.name = (e.target as HTMLInputElement).value;
      setTracklist(tracklist);
    },
    [tracklist]
  );

  const handleDateInput = useCallback(
    (e: Event) => {
      tracklist.date = (e.target as HTMLInputElement).value;
      setTracklist(tracklist);
    },
    [tracklist]
  );

  const handleUrlInput = useCallback(
    (e: Event) => {
      tracklist.url = (e.target as HTMLInputElement).value;
      setTracklist(tracklist);
    },
    [tracklist]
  );

  const handleUpload = useCallback(
    (filename: string) => {
      tracklist.artwork = filename;
      setTracklist(tracklist);
    },
    [tracklist]
  );

  const handleSelect = useCallback(
    (tracks: string[][]) => {
      tracklist.tracks = tracks;
    },
    [tracklist]
  );

  const handleSubmit = useCallback(async () => {
    const resp = await postTracklist(tracklist);

    if (resp) {
      route(`/tracklists/edit/${resp.id}`);
    }
  }, [tracklist]);

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

        <Button text="Add" onClick={handleSubmit} />
      </div>
    </>
  );
};

export default Add;
