import { useCallback } from "preact/hooks";
import { RoutableProps } from "preact-router";

import Button from "components/Button";
import Input from "components/Input";
import Subheader from "components/Subheader";
import TrackItem from "components/TrackItem";

import useGetResource from "hooks/useGetResource";

import { formatYearMonthDay } from "services/datetime";
import { patchTracklist } from "services/memoir";
import { Tracklist } from "services/memoir/types";

interface Props extends RoutableProps {
  id?: string;
}

const Edit = ({ id }: Props) => {
  const { data: tracklist } = useGetResource<Tracklist>(`/tracklists/${id!}`);

  const handleNameInput = useCallback(
    (e: Event) => {
      tracklist!.name = (e.target as HTMLInputElement).value;
    },
    [tracklist]
  );

  const handleDateInput = useCallback(
    (e: Event) => {
      tracklist!.date = (e.target as HTMLInputElement).value;
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
      await patchTracklist(tracklist);
    }
  }, [tracklist, id]);

  return (
    <>
      <div class="mb-4">
        <Subheader text="Edit Tracklist" center />
      </div>

      {tracklist && (
        <div class="space-y-4">
          <Input
            name="name"
            label="Name"
            placeholder="Name..."
            value={tracklist.name}
            onInput={handleNameInput}
          />

          <Input
            name="date"
            label="Date"
            placeholder="Date..."
            type="date"
            value={formatYearMonthDay(new Date(tracklist.date))}
            onInput={handleDateInput}
          />

          <Input
            name="url"
            label="Mixcloud URL"
            placeholder="Mixcloud URL..."
            value={tracklist.url}
            onInput={handleUrlInput}
          />

          <Button text="Update" onClick={handleSubmit} />

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
        </div>
      )}
    </>
  );
};

export default Edit;
