import { h } from "preact";

import Link from "components/molecules/Link";

export interface Props {
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
    <div class="flex items-center my-12 font-bold">
      <div class="flex flex-1 justify-center">
        {!isFirstPage && <Link href={prevUrl}>← Newer</Link>}
      </div>

      <div class="flex flex-1 justify-center">
        {hasMore && <Link href={nextUrl}>Older →</Link>}
      </div>
    </div>
  );
};
