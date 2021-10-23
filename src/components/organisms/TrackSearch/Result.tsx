import { h } from "preact";

import Link from "components/molecules/Link";

import { Track } from "services/memoir/types";
import highlight from "services/search";

export interface Props {
  track: Track;
  onClick: () => void;
}

export default ({ track, onClick }: Props) => (
  <li class="list-none truncate mx-2 my-2.5 text-white">
    <Link href={`/tracks/${track.id}`} onClick={onClick}>
      <span
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `${highlight(track.artistHighlighted)} - ${highlight(track.nameHighlighted)}`,
        }}
      />
    </Link>
  </li>
);
