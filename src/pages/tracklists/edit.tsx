import { useStore } from "@nanostores/preact";
import { redirectPage } from "@nanostores/router";
import { useCallback } from "preact/hooks";

import Input from "~/components/Input";
import Loading from "~/components/Loading";
import Subheader from "~/components/Subheader";
import Button from "~/components/button";

import { formatYearMonthDay } from "~/services/datetime";

import {
  $data,
  $editTracklist,
  $validationErrors,
  validate,
} from "~/stores/edit-tracklist";
import { $router } from "~/stores/router";
import { $currentTracklistId, $tracklist } from "~/stores/tracklists";

export default function Edit() {
  const { data: tracklist, loading } = useStore($tracklist);
  const id = useStore($currentTracklistId);
  const errors = useStore($validationErrors);

  $tracklist.listen((tracklist) => {
    if (tracklist.data) {
      const {
        data: { id, name, date, url },
      } = tracklist.data;
      $data.set({ id, name, date, url });
    }
  });

  const handleSubmit = useCallback(async () => {
    const payload = validate();

    if (payload) {
      await $editTracklist.mutate(payload);

      if (id) {
        redirectPage($router, "tracklistsShow", { id });
      }
    }
  }, [id]);

  if (tracklist?.data) {
    const { name, date, url } = tracklist.data;

    return (
      <div class="space-y-4">
        <Subheader text="Edit Tracklist" center />

        <div class="space-y-4">
          <Input
            name="name"
            label="Name"
            placeholder="Name..."
            value={name}
            errors={errors.name}
            onInput={(v) => $data.setKey("name", v)}
          />

          <Input
            name="date"
            label="Date"
            placeholder="Date..."
            type="date"
            value={formatYearMonthDay(new Date(date))}
            errors={errors.date}
            onInput={(v) => $data.setKey("date", `${v}T00:00:00Z`)}
          />

          <Input
            name="url"
            label="Mixcloud URL"
            placeholder="Mixcloud URL..."
            value={url}
            errors={errors.url}
            onInput={(v) => $data.setKey("url", v)}
          />

          <Button text="Update" onClick={handleSubmit} />
        </div>
      </div>
    );
  }

  if (loading) {
    return <Loading />;
  }

  // TODO: render error
  return null;
}
