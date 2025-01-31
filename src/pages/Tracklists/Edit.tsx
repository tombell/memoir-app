import { useStore } from "@nanostores/preact";
import { type RoutableProps, route } from "preact-router";
import { useCallback, useState } from "preact/hooks";

import Button from "~/components/Button";
import Input from "~/components/Input";
import Subheader from "~/components/Subheader";
import TrackItem from "~/components/TrackItem";

import { formatYearMonthDay } from "~/services/datetime";
import type { APIResponse } from "~/services/memoir";
import type { Tracklist } from "~/services/memoir/types";

import {
  createTracklistStore,
  createUpdateTracklistStore,
} from "~/stores/tracklists";

interface Props extends RoutableProps {
  id?: string;
}

const handleChange = (key: "name" | "date" | "url", tracklist: Tracklist) => {
  return (val: string) => {
    if (!tracklist) return;
    tracklist[key] = key === "date" ? `${val}T00:00:00Z` : val;
  };
};

export default function Edit({ id }: Props) {
  const [$tracklist] = useState(createTracklistStore(id));
  const [$updateTracklist] = useState(createUpdateTracklistStore(id));

  const { data: tracklist, loading } = useStore($tracklist);
  const { mutate } = useStore($updateTracklist);

  const handleSubmit = useCallback(async () => {
    if (!tracklist?.data) {
      return;
    }

    const resp = (await mutate(tracklist.data)) as APIResponse<Tracklist>;

    if (resp?.data) {
      route(`/tracklist/${resp.data.id}`);
    }
  }, [mutate, tracklist]);

  if (tracklist?.data) {
    return (
      <div class="space-y-4">
        <Subheader text="Edit Tracklist" center />

        {tracklist.data && (
          <div class="space-y-4">
            <Input
              name="name"
              label="Name"
              placeholder="Name..."
              value={tracklist.data.name}
              onInput={handleChange("name", tracklist.data)}
            />

            <Input
              name="date"
              label="Date"
              placeholder="Date..."
              type="date"
              value={formatYearMonthDay(new Date(tracklist.data.date))}
              onInput={handleChange("date", tracklist.data)}
            />

            <Input
              name="url"
              label="Mixcloud URL"
              placeholder="Mixcloud URL..."
              value={tracklist.data.url}
              onInput={handleChange("url", tracklist.data)}
            />

            <Button text="Update" onClick={handleSubmit} />

            {tracklist.data.tracks?.map((track) => (
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

  if (loading) {
    return null;
  }

  return null;
}
