import { h } from "preact";
import { useCallback, useEffect, useState } from "preact/hooks";
import { RoutableProps } from "preact-router";
import { css } from "g-style";

import API, { Tracklist } from "services/memoir";

import Input from "components/form/Input";
import Submit from "components/form/Submit";

import Subheader from "components/Subheader";
import TrackItem from "components/TrackItem";

const formClassName = css({
  marginBottom: "1rem",
});

interface Props extends RoutableProps {
  id?: string;
  api: API;
}

export default ({ id, api }: Props) => {
  const [tracklist, setTracklist] = useState<Tracklist | null>(null);

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
    <div>
      <Subheader text="Edit Tracklist" />

      {tracklist && (
        <div>
          <div class={formClassName}>
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

          <div>
            {tracklist.tracks!.map((track) => (
              <TrackItem
                id={track.id}
                artist={track.artist}
                name={track.name}
                genre={track.genre}
                bpm={track.bpm}
                key={track.key}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
