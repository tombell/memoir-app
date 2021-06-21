import { h } from "preact";
import { useCallback, useState } from "preact/hooks";
import { route, RoutableProps } from "preact-router";
import { css } from "g-style";

import API, { NewTracklist } from "services/memoir";

import Input from "components/form/Input";
import Submit from "components/form/Submit";

import ArtworkUploader from "components/ArtworkUploader";
import Subheader from "components/Subheader";
import TracklistPicker from "components/TracklistPicker";

const className = css({
  marginBottom: "1rem",
});

const sectionClassName = css({
  marginBottom: "0.5rem",
});

const textClassName = css({
  marginBottom: "0.5rem",
  fontWeight: "bold",
});

interface Props extends RoutableProps {
  api: API;
}

export default ({ api }: Props) => {
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
    const resp = await api.postTracklist(tracklist);

    if (resp) {
      route(`/tracklists/edit/${resp.id}`);
    }
  }, [tracklist]);

  return (
    <div class={className}>
      <Subheader text="Add Tracklist" />

      <Input name="name" text="Name" type="text" onInput={handleNameInput} />
      <Input name="date" text="Date" type="date" onInput={handleDateInput} />
      <Input name="url" text="URL" type="text" onInput={handleUrlInput} />

      <div class={sectionClassName}>
        <h2 class={textClassName}>Artwork</h2>
        <ArtworkUploader api={api} onUpload={handleUpload} />
      </div>

      <div class={sectionClassName}>
        <h2 class={textClassName}>Tracklist</h2>
        <TracklistPicker onSelect={handleSelect} />
      </div>

      <Submit onClick={handleSubmit} />
    </div>
  );
};
