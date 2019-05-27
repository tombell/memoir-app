import { h } from 'preact';

interface Props {
  path: string;
  page: number;
  hasMore: boolean;
}

export default ({ path, page, hasMore }: Props) => {
  const isFirstPage = page === 1;
  const prevUrl = path.replace(':page', `${page - 1}`);
  const nextUrl = path.replace(':page', `${page + 1}`);

  return (
    <div class="pagination">
      <div class="pagination-link">
        {!isFirstPage && <a href={prevUrl}>← Newer</a>}
      </div>

      <div class="pagination-link">
        {hasMore && <a href={nextUrl}>Older →</a>}
      </div>
    </div>
  );
};
