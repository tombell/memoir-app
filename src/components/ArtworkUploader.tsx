import { useCallback, useState } from "preact/hooks";

import FilePicker from "components/FilePicker";

import { uploadArtwork } from "services/memoir";

import "./ArtworkUploader.css";

export interface Props {
  onUpload: (artwork: string) => void;
}

const ArtworkUploader = ({ onUpload }: Props) => {
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

  return artwork ? (
    <div class="artwork-uploader">
      <img
        class="artwork-uploader-image"
        alt="Mix Artwork"
        src={`${MEMOIR_CDN_URL}/${artwork}`}
      />
    </div>
  ) : (
    <FilePicker accept="image/jpeg, image/png" onSelect={handleSelect} />
  );
};

export default ArtworkUploader;
