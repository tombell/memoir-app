import type { Signal } from "@preact/signals";
import { type RoutableProps, route } from "preact-router";
import { useCallback } from "preact/hooks";

import Button from "$components/Button";
import Input from "$components/Input";
import Subheader from "$components/Subheader";
import TrackItem from "$components/TrackItem";

import { formatYearMonthDay } from "$services/datetime";
import type { Tracklist } from "$services/memoir/types";

import { usePatchTracklist, useTracklist } from "$hooks/memoir";

interface Props extends RoutableProps {
  id?: string;
}

const handleChange =
  (key: "name" | "date" | "url", signal: Signal<Tracklist | null>) =>
  (val: string) => {
    if (!signal.value) {
      return;
    }

    signal.value[key] = key === "date" ? `${val}T00:00:00Z` : val;
  };

function Edit({ id }: Props) {
  const { data: tracklist } = useTracklist(id);

  const { perform: patchTracklist } = usePatchTracklist(id);

  const handleSubmit = useCallback(async () => {
    if (!tracklist.value) {
      return;
    }

    const resp = await patchTracklist(tracklist.value);

    if (resp) {
      route(`/tracklist/${resp.id}`);
    }
  }, [patchTracklist, tracklist.value]);

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

          {tracklist.value.tracks?.map((track) => (
            <TrackItem
              key={track.id}
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
}

export default Edit;
