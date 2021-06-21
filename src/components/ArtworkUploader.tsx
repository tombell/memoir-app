import { h } from "preact";
import { useCallback, useState } from "preact/hooks";
import { css } from "g-style";

import API from "services/memoir";

import FilePicker from "components/FilePicker";

const className = css({
  boxSizing: "border-box",
  width: "100%",
  padding: "1rem",
  textAlign: "center",
  /* background: darken($background-color, 5%); */
  borderRadius: "0.1875rem",
});

const imgClassName = css({
  width: "6rem",
  height: "6rem",
});

interface Props {
  api: API;
  onUpload: (artwork: string) => void;
}

export default ({ api, onUpload }: Props) => {
  const [artwork, setArtwork] = useState<string | null>(null);

  const handleSelect = useCallback(async (file: File) => {
    const upload = await api.uploadArtwork(file);

    if (upload) {
      setArtwork(upload.key);
      onUpload(upload.key);
    }
  }, []);

  return (
    <div>
      {!artwork && (
        <FilePicker accept="image/jpeg, image/png" onSelect={handleSelect} />
      )}

      {artwork && (
        <div class={className}>
          <img
            class={imgClassName}
            alt="Mix Artwork"
            src={`${MEMOIR_CDN_URL}/${artwork}`}
          />
        </div>
      )}
    </div>
  );
};
