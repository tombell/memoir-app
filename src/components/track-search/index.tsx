import { useStore } from "@nanostores/preact";
import { map } from "nanostores";
import { useCallback, useEffect, useRef } from "preact/hooks";

import Input from "~/components/input";
import Results from "~/components/track-search/results";

import type { APIResponse } from "~/services/memoir";
import type { Track } from "~/services/memoir/types";

import debounce from "~/utils/debounce";

import { $searchTracks } from "~/stores/tracks";

const $results = map<{ show: boolean; tracks: Track[] | undefined }>({
  show: false,
  tracks: undefined,
});

export default function TrackSearch() {
  const ref = useRef<HTMLDivElement>(null);

  const results = useStore($results);

  const onBodyClick = useCallback(({ target }: MouseEvent) => {
    if (!ref.current?.contains(target as Node)) {
      $results.setKey("show", false);
    }
  }, []);

  useEffect(() => {
    const cleanup = $results.subscribe(({ show }) => {
      if (show) {
        document.addEventListener("click", onBodyClick);
      } else {
        document.removeEventListener("click", onBodyClick);
      }
    });

    return cleanup;
  }, [onBodyClick]);

  const request = useCallback(
    debounce(async (value: string) => {
      const resp = (await $searchTracks.mutate(value)) as APIResponse<Track[]>;
      $results.set({ show: true, tracks: resp.data });
    }, 300),
    [],
  );

  const onInput = useCallback((value: string) => {
    if (value.length < 3) {
      $results.set({ show: false, tracks: undefined });
      return;
    }

    request(value);
  }, []);

  return (
    <div class="relative" ref={ref}>
      <Input
        name="search"
        placeholder="Search tracks..."
        onInput={onInput}
        onFocus={() => $results.setKey("show", true)}
      />

      <Results
        tracks={results.tracks}
        show={results.show}
        onResultClick={() => $results.setKey("show", false)}
      />
    </div>
  );
}
