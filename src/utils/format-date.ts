export default function formatDate(date: string) {
  const d = new Date(date);

  const parts = [
    d.getDate().toString().padStart(2, '0'),
    (d.getMonth() + 1).toString().padStart(2, '0'),
    d.getFullYear(),
  ];

  return parts.join('/');
}
