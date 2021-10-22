import { Artwork } from "services/memoir/types";

export const request = async (
  endpoint: string,
  method = "GET",
  body?: FormData | string
) => {
  const headers: any = {};

  if (MEMOIR_API_KEY) {
    headers["API-Write-Key"] = MEMOIR_API_KEY;
  }

  return fetch(`${MEMOIR_API_URL}${endpoint}`, {
    method,
    body,
    headers,
  });
};

export const uploadArtwork = async (file: File): Promise<Artwork | null> => {
  try {
    const data = new FormData();
    data.append("artwork", file);
    const resp = await request("/uploads/artwork", "POST", data);
    return await resp.json();
  } catch {
    return null;
  }
};
