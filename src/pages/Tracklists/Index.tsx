import { css } from "g-style";
import { h } from "preact";
import { RoutableProps, route } from "preact-router";

import Loading from "components/molecules/Loading";

import Pagination from "components/organisms/Pagination";
import TracklistItem from "components/organisms/TracklistItem";

import useTracklists from "hooks/useTracklists";

const className = css({
  minHeight: "33.625rem",
});

interface Props extends RoutableProps {
  page?: string;
}

export default ({ path, page }: Props) => {
  const pageNum = parseInt(page || "1", 10);

  // eslint-disable-next-line no-restricted-globals
  if (isNaN(pageNum)) {
    route("/404", true);
    return null;
  }

  const { isLoading, hasMore, tracklists } = useTracklists(pageNum);

  return (
    <div class={className}>
      {isLoading && <Loading />}

      {!isLoading &&
        tracklists &&
        tracklists.map(({ id, name, date, artwork, trackCount }) => (
          <TracklistItem
            key={id}
            id={id}
            name={name}
            date={date}
            artwork={artwork}
            trackCount={trackCount}
          />
        ))}

      <Pagination path={path!} page={pageNum} hasMore={hasMore} />
    </div>
  );
};
