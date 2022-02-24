export const formatFriendlyDate = (date: Date) =>
  [
    date.getDate().toString().padStart(2, "0"),
    (date.getMonth() + 1).toString().padStart(2, "0"),
    date.getFullYear(),
  ].join("/");

export const formatYearMonthDay = (date: Date) =>
  [
    date.getFullYear(),
    (date.getMonth() + 1).toString().padStart(2, "0"),
    date.getDate().toString().padStart(2, "0"),
  ].join("-");
