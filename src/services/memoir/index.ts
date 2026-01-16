const request = async (
  endpoint: string,
  method = "GET",
  body: FormData | string | null = null,
) => {
  const headers: Record<string, string> = {};

  if (process.env.PUBLIC_MEMOIR_API_KEY) {
    headers["API-Token"] = process.env.PUBLIC_MEMOIR_API_KEY;
  }

  if (body && typeof body === "string") {
    headers["Content-Type"] = "application/json";
  }

  return fetch(`${process.env.PUBLIC_MEMOIR_API_URL}${endpoint}`, {
    method,
    body,
    headers,
  });
};

export interface APIResponse<T> {
  meta?: {
    current_page: number;
    total_pages: number;
  };
  data: T;
}

export const get = <T>(endpoint: string): Promise<APIResponse<T>> =>
  request(endpoint).then((r) => r.json());

export const post = <T>(endpoint: string, body?: T): Promise<APIResponse<T>> =>
  request(endpoint, "POST", body ? JSON.stringify(body) : undefined).then((r) =>
    r.json(),
  );

export const postFile = <T>(
  endpoint: string,
  body: FormData,
): Promise<APIResponse<T>> =>
  request(endpoint, "POST", body).then((r) => r.json());

export const patch = <T>(endpoint: string, body: T): Promise<APIResponse<T>> =>
  request(endpoint, "PATCH", JSON.stringify(body)).then((r) => r.json());
