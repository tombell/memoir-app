/// <reference types="vite/client" />
/// <reference types="bun-types" />

interface ImportMetaEnv {
  readonly VITE_MEMOIR_ADMIN_ENABLED?: string;
  readonly VITE_MEMOIR_API_KEY?: string;
  readonly VITE_MEMOIR_API_URL?: string;
  readonly VITE_MEMOIR_CDN_URL?: string;
}
