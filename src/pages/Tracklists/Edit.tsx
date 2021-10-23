import { Fragment, h } from "preact";
import { RoutableProps } from "preact-router";
import { useCallback } from "preact/hooks";

import Subheader from "components/molecules/Subheader";
import Input from "components/molecules/form/Input";
import Submit from "components/molecules/form/Submit";

import TrackItem from "components/organisms/TrackItem";

import useTracklist from "hooks/useTracklist";

import { formatYearMonthDay } from "services/datetime";
import { patchTracklist } from "services/memoir/tracklists";

interface Props extends RoutableProps {
  id?: string;
}

export default ({ id }: Props) => {
  const { tracklist } = useTracklist(id!);

  const handleNameInput = useCallback(
    (e: Event) => {
      tracklist!.name = (e.target as HTMLInputElement).value;
    },
    [tracklist]
  );

  const handleDateInput = useCallback(
    (e: Event) => {
      tracklist!.date = new Date((e.target as HTMLInputElement).value);
    },
    [tracklist]
  );

  const handleUrlInput = useCallback(
    (e: Event) => {
      tracklist!.url = (e.target as HTMLInputElement).value;
    },
    [tracklist]
  );

  const handleSubmit = useCallback(async () => {
    if (tracklist) {
      await patchTracklist(id!, tracklist);
    }
  }, [tracklist, id]);

  return (
    <>
      <Subheader text="Edit Tracklist" />

      {tracklist && (
        <>
          <div class="mb-4">
            <Input
              name="name"
              label="Name"
              type="text"
              value={tracklist.name}
              onInput={handleNameInput}
            />

            <Input
              name="date"
              label="Date"
              type="date"
              value={formatYearMonthDay(tracklist.date)}
              onInput={handleDateInput}
            />

            <Input
              name="url"
              label="URL"
              type="text"
              value={tracklist.url}
              onInput={handleUrlInput}
            />

            <Submit onClick={handleSubmit} />
          </div>

          <>
            {tracklist.tracks!.map((track) => (
              <TrackItem
                id={track.id}
                artist={track.artist}
                name={track.name}
                genre={track.genre}
                bpm={track.bpm}
                camelotKey={track.key}
              />
            ))}
          </>
        </>
      )}
    </>
  );
};
