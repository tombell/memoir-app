import Link from "components/Link";

import "./Pagination.css";

export interface Props {
  path: string;
  id?: string;
  page: number;
  hasMore: boolean;
}

const Pagination = ({ path, id, page, hasMore }: Props) => {
  const isFirstPage = page === 1;

  let prevUrl = path.replace(/:page\??/, `${page - 1}`);
  let nextUrl = path.replace(/:page\??/, `${page + 1}`);

  if (id) {
    prevUrl = prevUrl.replace(":id", id);
    nextUrl = nextUrl.replace(":id", id);
  }

  return (
    <div class="pagination">
      <div class="pagination-link">
        {!isFirstPage && <Link href={prevUrl}>← Newer</Link>}
      </div>

      <div class="pagination-link">
        {hasMore && <Link href={nextUrl}>Older →</Link>}
      </div>
    </div>
  );
};

export default Pagination;
