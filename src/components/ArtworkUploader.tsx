import { useSignal } from "@preact/signals";
import { useCallback } from "preact/hooks";

import FilePicker from "$/components/FilePicker";

import { usePostArtwork } from "$/hooks/memoir";

interface Props {
  name: string;
  label?: string;
  onUpload: (artwork: string) => void;
}

function ArtworkUploader({ name, label, onUpload }: Props) {
  const artwork = useSignal<string | null>(null);

  const { perform: uploadArtwork } = usePostArtwork();

  const handleSelect = useCallback(
    async (file: File) => {
      const data = new FormData();
      data.append("artwork", file);

      const upload = await uploadArtwork(data);

      if (upload) {
        artwork.value = upload.key;
        onUpload(artwork.value);
      }
    },
    [uploadArtwork, onUpload, artwork],
  );

  return artwork.value ? (
    <div class="box-border w-full rounded-sm bg-gray-800 p-4 text-center">
      <img
        class="h-24 w-24 border border-solid border-gray-700"
        alt="Mix Artwork"
        src={`${import.meta.env.VITE_MEMOIR_CDN_URL}/${artwork.value}`}
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
}

export default ArtworkUploader;
