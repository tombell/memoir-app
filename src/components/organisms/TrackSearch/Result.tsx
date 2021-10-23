import { h } from "preact";

import Link from "components/molecules/Link";

import { Track } from "services/memoir/types";

const highlight = (text?: string | null) => {
  if (!text) {
    return "";
  }

  return text.replace(
    /<<(.*?)>>/g,
    (_a, str) => `<b class="italic font-bold text-indigo-500">${str}</b>`
  );
};

export interface Props {
  track: Track;
  onClick: () => void;
}

export default ({ track, onClick }: Props) => (
  <li class="my-2.5 mx-2 list-none text-white truncate">
    <Link href={`/tracks/${track.id}`} onClick={onClick}>
      <span
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `${highlight(track.artistHighlighted)} - ${highlight(
            track.nameHighlighted
          )}`,
        }}
      />
    </Link>
  </li>
);
