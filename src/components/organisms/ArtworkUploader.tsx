import { Fragment, h } from "preact";
import { useCallback, useState } from "preact/hooks";

import FilePicker from "components/molecules/form/FilePicker";

import { uploadArtwork } from "services/memoir";

export interface Props {
  onUpload: (artwork: string) => void;
}

export default ({ onUpload }: Props) => {
  const [artwork, setArtwork] = useState<string | null>(null);

  const handleSelect = useCallback(
    async (file: File) => {
      const upload = await uploadArtwork(file);

      if (upload) {
        setArtwork(upload.key);
        onUpload(upload.key);
      }
    },
    [onUpload]
  );

  return (
    <>
      {!artwork && (
        <FilePicker accept="image/jpeg, image/png" onSelect={handleSelect} />
      )}

      {artwork && (
        <div class="box-border w-full p-4 text-center bg-gray-700 rounded">
          <img
            class="w-24 h-24"
            alt="Mix Artwork"
            src={`${MEMOIR_CDN_URL}/${artwork}`}
          />
        </div>
      )}
    </>
  );
};
