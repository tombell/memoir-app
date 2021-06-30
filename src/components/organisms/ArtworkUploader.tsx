import { h, Fragment } from "preact";
import { useCallback, useState } from "preact/hooks";
import { css } from "g-style";

import { uploadArtwork } from "services/memoir";

import Colors from "components/atoms/Colors";

import FilePicker from "components/molecules/form/FilePicker";

const className = css({
  boxSizing: "border-box",
  width: "100%",
  padding: "1rem",
  textAlign: "center",
  background: Colors.backgroundDark,
  borderRadius: "0.1875rem",
});

const imgClassName = css({
  width: "6rem",
  height: "6rem",
});

interface Props {
  onUpload: (artwork: string) => void;
}

export default ({ onUpload }: Props) => {
  const [artwork, setArtwork] = useState<string | null>(null);

  const handleSelect = useCallback(async (file: File) => {
    const upload = await uploadArtwork(file);

    if (upload) {
      setArtwork(upload.key);
      onUpload(upload.key);
    }
  }, []);

  return (
    <>
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
    </>
  );
};
