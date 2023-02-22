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
    (value: string) => {
      tracklist!.name = value;
    },
    [tracklist]
  );

  const handleDateInput = useCallback(
    (value: string) => {
      tracklist!.date = `${value}T00:00:00Z`;
    },
    [tracklist]
  );

  const handleUrlInput = useCallback(
    (value: string) => {
      tracklist!.url = value;
    },
    [tracklist]
  );

  const handleSubmit = useCallback(async () => {
    if (tracklist) {
      await patchTracklist(tracklist);
    }
  }, [tracklist]);

  return (
    <div class="space-y-4">
      <Subheader text="Edit Tracklist" center />

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
    </div>
  );
};

export default Edit;
