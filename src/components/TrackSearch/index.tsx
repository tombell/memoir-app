import { effect, signal } from "@preact/signals";
import { useCallback, useRef } from "preact/hooks";

import Input from "components/Input";

import Results from "components/TrackSearch/Results";

import { searchTracks } from "services/memoir";
import { Track } from "services/memoir/types";

const showResults = signal(false);
const tracks = signal<Track[] | null>(null);

const Index = () => {
  const ref = useRef<HTMLDivElement>(null);

  const onBodyClick = useCallback(({ target }: any) => {
    if (!ref.current?.contains(target)) {
      showResults.value = false;
    }
  }, []);

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
    [tracks]
  );

  const onInputFocus = useCallback(() => {
    showResults.value = true;
  }, []);

  const onResultClick = useCallback(() => {
    showResults.value = false;
  }, []);

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
