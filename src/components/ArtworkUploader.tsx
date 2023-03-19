import { useSignal } from "@preact/signals";
import { useCallback } from "preact/hooks";

import FilePicker from "components/FilePicker";

import { uploadArtwork } from "services/memoir";

interface Props {
  name: string;
  label?: string;
  onUpload: (artwork: string) => void;
}

const ArtworkUploader = ({ name, label, onUpload }: Props) => {
  const artwork = useSignal<string | null>(null);

  const handleSelect = useCallback(
    async (file: File) => {
      const upload = await uploadArtwork(file);

      if (upload) {
        artwork.value = upload.key;
        onUpload(artwork.value);
      }
    },
    [onUpload, artwork]
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
    <FilePicker
      name={name}
      label={label}
      accept="image/jpeg, image/png"
      onSelect={handleSelect}
    />
  );
};

export default ArtworkUploader;
