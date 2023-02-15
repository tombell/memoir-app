import { signal } from "@preact/signals";
import { useCallback } from "preact/hooks";

import FilePicker from "components/FilePicker";

import { uploadArtwork } from "services/memoir";

interface Props {
  onUpload: (artwork: string) => void;
}

const artwork = signal<string | null>(null);

const ArtworkUploader = ({ onUpload }: Props) => {
  const handleSelect = useCallback(
    async (file: File) => {
      const upload = await uploadArtwork(file);

      if (upload) {
        artwork.value = upload.key;
        onUpload(artwork.value);
      }
    },
    [onUpload]
  );

  return artwork.value ? (
    <div class="box-border w-full rounded bg-gray-800 p-4 text-center">
      <img
        class="h-24 w-24 border border-solid border-gray-700"
        alt="Mix Artwork"
        src={`${MEMOIR_CDN_URL}/${artwork.value}`}
      />
    </div>
  ) : (
    <FilePicker accept="image/jpeg, image/png" onSelect={handleSelect} />
  );
};

export default ArtworkUploader;
