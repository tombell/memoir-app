import { h } from 'preact';
import { useCallback, useState } from 'preact/hooks';

import API from 'memoir-api';

import FilePicker from 'components/FilePicker';

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
    <div class="artwork-uploader">
      {!artwork && (
        <FilePicker accept="image/jpeg, image/png" onSelect={handleSelect} />
      )}

      {artwork && (
        <div class="artwork-uploader__container">
          <img
            class="artwork-uploader__image"
            alt=""
            src={`${MEMOIR_CDN_URL}/${artwork}`}
          />
        </div>
      )}
    </div>
  );
};
