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

  const resp = await fetch(`${MEMOIR_API_URL}${endpoint}`, {
    method,
    body,
    headers,
  });

  return resp.json();
};

export const uploadArtwork = async (file: File): Promise<Artwork | null> => {
  try {
    const data = new FormData();
    data.append("artwork", file);
    return await request("/uploads/artwork", "POST", data);
  } catch {
    return null;
  }
};
