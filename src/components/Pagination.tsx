import { h } from "preact";
import { css } from "g-style";

import Breakpoints from "components/atoms/Breakpoints";

const className = css({
  display: "flex",
  alignItems: "center",
  margin: "2rem 0",
  fontWeight: "bold",
  [Breakpoints.desktop]: {
    margin: "3.125rem 0",
  },
});

const linkClassName = css({
  display: "flex",
  flex: 1,
  justifyContent: "center",
});

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
    <div class={className}>
      <div class={linkClassName}>
        {!isFirstPage && <a href={prevUrl}>← Newer</a>}
      </div>

      <div class={linkClassName}>
        {hasMore && <a href={nextUrl}>Older →</a>}
      </div>
    </div>
  );
};
