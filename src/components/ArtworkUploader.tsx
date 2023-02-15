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
    <div class="p-4 w-full text-center bg-gray-800 rounded box-border">
      <img
        class="w-24 h-24 border border-gray-700 border-solid"
        alt="Mix Artwork"
        src={`${MEMOIR_CDN_URL}/${artwork.value}`}
      />
    </div>
  ) : (
    <FilePicker accept="image/jpeg, image/png" onSelect={handleSelect} />
  );
};

export default ArtworkUploader;
