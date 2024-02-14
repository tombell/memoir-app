import Link from "@components/Link";

interface Props {
  path: string;
  id?: string;
  page: number;
  hasMore: boolean;
}

function Pagination({ path, id, page, hasMore }: Props) {
  const isFirstPage = page === 1;

  let prevUrl = `${path}?page=${page - 1}`;
  let nextUrl = `${path}?page=${page + 1}`;

  if (id) {
    prevUrl = prevUrl.replace(":id", id);
    nextUrl = nextUrl.replace(":id", id);
  }

  return (
    <div class="my-12 flex items-center font-bold">
      <div class="flex flex-1 justify-center">
        {!isFirstPage && <Link href={prevUrl}>← Newer</Link>}
      </div>

      <div class="flex flex-1 justify-center">
        {hasMore && <Link href={nextUrl}>Older →</Link>}
      </div>
    </div>
  );
}

export default Pagination;
