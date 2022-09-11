import { useCallback, useEffect, useRef, useState } from "preact/hooks";

import Input from "components/Input";

import Results from "components/TrackSearch/Results";

import { searchTracks } from "services/memoir";
import { Track } from "services/memoir/types";

const Index = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [tracks, setTracks] = useState<Track[] | null>(null);
  const [showResults, setShowResults] = useState(false);

  const onBodyClick = useCallback(({ target }: any) => {
    if (!ref.current?.contains(target)) {
      setShowResults(false);
    }
  }, []);

  const onInput = useCallback(async ({ target: { value } }: any) => {
    if (value.length < 3) {
      setTracks(null);
      setShowResults(false);
      return;
    }

    const resp = await searchTracks(value);

    if (resp) {
      setTracks(resp);
      setShowResults(true);
    }
  }, []);

  const onInputFocus = useCallback(() => setShowResults(true), []);

  const onResultClick = useCallback(() => setShowResults(false), []);

  useEffect(() => {
    if (showResults) {
      document.addEventListener("click", onBodyClick);
    } else {
      document.removeEventListener("click", onBodyClick);
    }
  }, [onBodyClick, showResults]);

  return (
    <div class="relative" ref={ref}>
      <Input
        name="search"
        placeholder="Search tracks..."
        onInput={onInput}
        onFocus={onInputFocus}
      />

      <Results
        tracks={tracks}
        show={showResults}
        onResultClick={onResultClick}
      />
    </div>
  );
};

export default Index;
