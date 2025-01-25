export const request = async (
  endpoint: string,
  method = "GET",
  body: FormData | string | null = null,
) => {
  const headers: { [key: string]: string } = {};

  if (import.meta.env.VITE_MEMOIR_API_KEY) {
    headers["API-Token"] = import.meta.env.VITE_MEMOIR_API_KEY;
  }

  if (body && typeof body === "string") {
    headers["Content-Type"] = "application/json";
  }

  return fetch(`${import.meta.env.VITE_MEMOIR_API_URL}${endpoint}`, {
    method,
    body,
    headers,
  });
};
