const request = async (
  endpoint: string,
  method = "GET",
  body: FormData | string | null = null,
) => {
  const headers: { [key: string]: string } = {};

  if (import.meta.env.VITE_MEMOIR_API_KEY) {
    headers["API-Token"] = import.meta.env.VITE_MEMOIR_API_KEY;
  }

  return fetch(`${import.meta.env.VITE_MEMOIR_API_URL}${endpoint}`, {
    method,
    body,
    headers,
  });
};

export default request;
