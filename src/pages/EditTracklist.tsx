import { h } from 'preact';
import { useCallback, useEffect, useState } from 'preact/hooks';
import { RoutableProps } from 'preact-router';

import API, { Tracklist } from 'memoir-api';

import Input from 'components/form/Input';
import Submit from 'components/form/Submit';
import TrackItem from 'components/TrackItem';

interface Props extends RoutableProps {
  id?: string;
}

export default ({ id }: Props) => {
  const [tracklist, setTracklist] = useState<Tracklist | null>(null);

  const api = new API(MEMOIR_API_URL, MEMOIR_API_KEY);

  useEffect(() => {
    const fn = async () => {
      const resp = await api.fetchTracklist(id!);
      setTracklist(resp);
    };

    fn();
  }, []);

  const handleNameInput = useCallback(
    (e: Event) => {
      tracklist!.name = (e.target as HTMLInputElement).value;
      setTracklist(tracklist);
    },
    [tracklist]
  );

  const handleDateInput = useCallback(
    (e: Event) => {
      tracklist!.date = (e.target as HTMLInputElement).value;
      setTracklist(tracklist);
    },
    [tracklist]
  );

  const handleUrlInput = useCallback(
    (e: Event) => {
      tracklist!.url = (e.target as HTMLInputElement).value;
      setTracklist(tracklist);
    },
    [tracklist]
  );

  const handleSubmit = useCallback(async () => {
    if (tracklist) {
      const resp = await api.patchTracklist(id!, tracklist);
      setTracklist(resp);
    }
  }, [tracklist]);

  return (
    <div class="edit-tracklist">
      <h1 class="edit-tracklist__header">Edit Tracklist</h1>

      {tracklist && (
        <div>
          <div class="edit-tracklist__form">
            <Input
              name="name"
              text="Name"
              type="text"
              value={tracklist.name}
              onInput={handleNameInput}
            />

            <Input
              name="date"
              text="Date"
              type="date"
              value={tracklist.date}
              onInput={handleDateInput}
            />

            <Input
              name="url"
              text="URL"
              type="text"
              value={tracklist.url}
              onInput={handleUrlInput}
            />

            <Submit onClick={handleSubmit} />
          </div>

          <div class="edit-tracklist__tracks">
            {tracklist.tracks!.map((track) => (
              <TrackItem track={track} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
