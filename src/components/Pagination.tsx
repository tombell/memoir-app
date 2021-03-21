import { h } from "preact";

interface Props {
  path: string;
  id?: string;
  page: number;
  hasMore: boolean;
}

export default ({ path, id, page, hasMore }: Props) => {
  const isFirstPage = page === 1;

  let prevUrl = path.replace(/:page\??/, `${page - 1}`);
  let nextUrl = path.replace(/:page\??/, `${page + 1}`);

  if (id) {
    prevUrl = prevUrl.replace(":id", id);
    nextUrl = nextUrl.replace(":id", id);
  }

  return (
    <div class="pagination">
      <div class="pagination__link">
        {!isFirstPage && <a href={prevUrl}>← Newer</a>}
      </div>

      <div class="pagination__link">
        {hasMore && <a href={nextUrl}>Older →</a>}
      </div>
    </div>
  );
};
