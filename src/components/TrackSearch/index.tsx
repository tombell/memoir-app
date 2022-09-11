import { signal, useSignal } from "@preact/signals";
import { useCallback, useEffect, useRef } from "preact/hooks";

import Input from "components/Input";

import Results from "components/TrackSearch/Results";

import { searchTracks } from "services/memoir";
import { Track } from "services/memoir/types";

import "./index.css";

const showResults = signal(false);

const Index = () => {
  const ref = useRef<HTMLDivElement>(null);

  const tracks = useSignal<Track[] | null>(null);

  const onBodyClick = useCallback(({ target }: any) => {
    if (!ref.current?.contains(target)) {
      showResults.value = false;
    }
  }, []);

  const onInput = useCallback(
    async ({ target: { value } }: any) => {
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
    [tracks]
  );

  const onInputFocus = useCallback(() => {
    showResults.value = true;
  }, []);

  const onResultClick = useCallback(() => {
    showResults.value = false;
  }, []);

  useEffect(() => {
    if (showResults.value) {
      document.addEventListener("click", onBodyClick);
    } else {
      document.removeEventListener("click", onBodyClick);
    }
  }, [onBodyClick]);

  return (
    <div class="track-search" ref={ref}>
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
