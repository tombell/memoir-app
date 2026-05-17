export const config = {
  get isAdminEnabled() {
    return import.meta.env.VITE_MEMOIR_ADMIN_ENABLED === "true";
  },

  get memoirApiKey() {
    return import.meta.env.VITE_MEMOIR_API_KEY;
  },

  get memoirApiUrl() {
    return import.meta.env.VITE_MEMOIR_API_URL;
  },

  get memoirCdnUrl() {
    return import.meta.env.VITE_MEMOIR_CDN_URL;
  },
};
