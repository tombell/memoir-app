import { effect, useSignal } from "@preact/signals";
import { useCallback, useRef } from "preact/hooks";

import Input from "@components/Input";

import Results from "@components/TrackSearch/Results";

import { Track } from "@services/memoir/types";

import { useSearchTracks } from "@hooks/memoir";

const Index = () => {
  const showResults = useSignal(false);
  const tracks = useSignal<Track[] | null>(null);

  const ref = useRef<HTMLDivElement>(null);

  const { perform: searchTracks } = useSearchTracks();

  const onBodyClick = useCallback(
    ({ target }: any) => {
      if (!ref.current?.contains(target)) {
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

      const resp = await searchTracks(value);

      if (resp) {
        tracks.value = resp;
        showResults.value = true;
      }
    },
    [showResults, tracks, searchTracks],
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
};

export default Index;
