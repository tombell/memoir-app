import { h, FunctionalComponent } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import { route } from 'preact-router';

import API, { NewTracklist } from 'memoir-api';

import ArtworkUploader from 'components/ArtworkUploader';
import TracklistPicker from 'components/TracklistPicker';
import Input from 'components/form/Input';
import Submit from 'components/form/Submit';

const AddTracklist: FunctionalComponent = () => {
  const [tracklist, setTracklist] = useState<NewTracklist>({
    name: '',
    date: '',
    url: '',
    artwork: '',
    tracks: [],
  });

  const api = new API(MEMOIR_API_URL, MEMOIR_API_KEY);

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
      route(`/edit/${resp.id}`, true);
    }
  }, [tracklist]);

  return (
    <div class="add-tracklist">
      <h1 class="add-tracklist__header">Add Tracklist</h1>

      <Input name="name" text="Name" type="text" onInput={handleNameInput} />
      <Input name="date" text="Date" type="date" onInput={handleDateInput} />
      <Input name="url" text="URL" type="text" onInput={handleUrlInput} />

      <div class="add-tracklist__section">
        <h2 class="add-tracklist__subheader">Artwork</h2>
        <ArtworkUploader onUpload={handleUpload} />
      </div>

      <div class="add-tracklist__section">
        <h2 class="add-tracklist__subheader">Tracklist</h2>
        <TracklistPicker onSelect={handleSelect} />
      </div>

      <Submit onClick={handleSubmit} />
    </div>
  );
};

export default AddTracklist;
