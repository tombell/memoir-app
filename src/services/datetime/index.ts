const formatDate = (date: Date): string => {
  const parts = [
    date.getDate().toString().padStart(2, "0"),
    (date.getMonth() + 1).toString().padStart(2, "0"),
    date.getFullYear(),
  ];

  return parts.join("/");
};

export const formatYearMonthDay = (date: Date): string => {
  const parts = [
    date.getFullYear(),
    (date.getMonth() + 1).toString().padStart(2, "0"),
    date.getDate().toString().padStart(2, "0"),
  ];

  return parts.join("-");
}

export default formatDate;
