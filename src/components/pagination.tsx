import Link from "~/components/link";

interface Props {
  hasMore: boolean;
  page?: number;
  path: string;
}

export default function Pagination({ hasMore, page = 1, path }: Props) {
  const isFirstPage = page === 1;

  return (
    <div class="my-12 flex items-center font-bold">
      <div class="flex flex-1 justify-center">
        {!isFirstPage && <Link href={`${path}?page=${page - 1}`}>← Newer</Link>}
      </div>

      <div class="flex flex-1 justify-center">
        {hasMore && <Link href={`${path}?page=${page + 1}`}>Older →</Link>}
      </div>
    </div>
  );
}
