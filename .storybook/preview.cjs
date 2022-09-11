import "../src/components/App.css";

export const parameters = {};

export const decorators = [
  (story) => {
    document.body.classList.add("font-sans", "bg-gray-900");
    return story();
  },
];

global.MEMOIR_API_KEY = "asdf-asdf";
global.MEMOIR_API_URL = "http://localhost:8080";
global.MEMOIR_CDN_URL = "";
