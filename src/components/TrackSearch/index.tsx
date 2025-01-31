import { useStore } from "@nanostores/preact";
import { effect, useSignal } from "@preact/signals";
import { useCallback, useRef, useState } from "preact/hooks";

import Input from "~/components/Input";
import Results from "~/components/TrackSearch/Results";

import type { APIResponse } from "~/services/memoir";
import type { Track } from "~/services/memoir/types";

import { createSearchTracksStore } from "~/stores/tracks";

export default function TrackSearch() {
  const showResults = useSignal(false);
  const tracks = useSignal<Track[] | null>(null);

  const ref = useRef<HTMLDivElement>(null);

  const [$searchTracks] = useState(createSearchTracksStore());
  const { mutate } = useStore($searchTracks);

  const onBodyClick = useCallback(
    ({ target }: MouseEvent) => {
      if (!ref.current?.contains(target as Node)) {
        showResults.value = false;
      }
    },
    [showResults],
  );

  const onInput = useCallback(
    async (value: string) => {
      if (value.length < 3) {
        tracks.value = null;
        showResults.value = false;
        return;
      }

      const resp = (await mutate(value)) as APIResponse<Track[]>;
      console.log("RESP:", resp);

      if (resp.data) {
        tracks.value = resp.data;
        showResults.value = true;
      }
    },
    [showResults, tracks, mutate],
  );

  const onInputFocus = useCallback(() => {
    showResults.value = true;
  }, [showResults]);

  const onResultClick = useCallback(() => {
    showResults.value = false;
  }, [showResults]);

  effect(() => {
    if (showResults.value) {
      document.addEventListener("click", onBodyClick);
    } else {
      document.removeEventListener("click", onBodyClick);
    }
  });

  return (
    <div class="relative" ref={ref}>
      <Input
        name="search"
        placeholder="Search tracks..."
        onInput={onInput}
        onFocus={onInputFocus}
      />

      <Results
        tracks={tracks.value}
        show={showResults.value}
        onResultClick={onResultClick}
      />
    </div>
  );
}
