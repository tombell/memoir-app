import { useStore } from "@nanostores/preact";
import { atom } from "nanostores";
import { useCallback, useState } from "preact/hooks";

import FilePicker from "~/components/FilePicker";

import type { APIResponse } from "~/services/memoir";
import type { Artwork } from "~/services/memoir/types";

import { $addArtwork } from "~/stores/artwork";

interface Props {
  errors?: string[];
  label?: string;
  name: string;
  onUpload: (artwork: string) => void;
}

export default function ArtworkUploader({
  errors,
  label,
  name,
  onUpload,
}: Props) {
  const [$artwork] = useState(atom<string | null>(null));
  const artwork = useStore($artwork);

  const { mutate } = useStore($addArtwork);

  const handleSelect = useCallback(
    async (file: File) => {
      const data = new FormData();
      data.append("artwork", file);

      const resp = (await mutate(data)) as APIResponse<Artwork>;

      if (resp?.data) {
        $artwork.set(resp.data.key);
        onUpload(resp.data.key);
      }
    },
    [mutate, onUpload, $artwork],
  );

  if (artwork) {
    return (
      <div class="box-border w-full rounded-sm bg-gray-800 p-4 text-center">
        <img
          class="h-24 w-24 border border-solid border-gray-700"
          alt="Mix Artwork"
          src={`${process.env.PUBLIC_MEMOIR_CDN_URL}/${artwork}`}
        />
      </div>
    );
  }

  return (
    <FilePicker
      name={name}
      label={label}
      accept="image/jpeg, image/png"
      errors={errors}
      onSelect={handleSelect}
    />
  );
}
