export default (text?: string | null) => {
  if (!text) {
    return "";
  }

  return text.replace(
    /<<(.*?)>>/g,
    (_a, str) => `<b class="italic font-bold text-indigo-500">${str}</b>`
  );
};
