import { Signal } from "@preact/signals";
import { useCallback } from "preact/hooks";
import { RoutableProps, route } from "preact-router";

import Button from "components/Button";
import Input from "components/Input";
import Subheader from "components/Subheader";
import TrackItem from "components/TrackItem";

import { useTracklist } from "hooks/memoir";

import { formatYearMonthDay } from "services/datetime";
import { patchTracklist } from "services/memoir";
import { Tracklist } from "services/memoir/types";

interface Props extends RoutableProps {
  id?: string;
}

const handleChange =
  (key: "name" | "date" | "url", signal: Signal<Tracklist | null>) =>
  (val: string) => {
    signal.value![key] = key === "date" ? `${val}T00:00:00Z` : val;
  };

const Edit = ({ id }: Props) => {
  const { data: tracklist } = useTracklist(id!);

  const handleSubmit = useCallback(async () => {
    const resp = await patchTracklist(tracklist.value!);

    if (resp) {
      route(`/tracklist/${resp.id}`);
    }
  }, [tracklist.value]);

  return (
    <div class="space-y-4">
      <Subheader text="Edit Tracklist" center />

      {tracklist.value && (
        <div class="space-y-4">
          <Input
            name="name"
            label="Name"
            placeholder="Name..."
            value={tracklist.value.name}
            onInput={handleChange("name", tracklist)}
          />

          <Input
            name="date"
            label="Date"
            placeholder="Date..."
            type="date"
            value={formatYearMonthDay(new Date(tracklist.value.date))}
            onInput={handleChange("date", tracklist)}
          />

          <Input
            name="url"
            label="Mixcloud URL"
            placeholder="Mixcloud URL..."
            value={tracklist.value.url}
            onInput={handleChange("url", tracklist)}
          />

          <Button text="Update" onClick={handleSubmit} />

          {tracklist.value.tracks!.map((track) => (
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
