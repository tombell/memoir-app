import Link from "~/components/Link";

import type { Track } from "~/services/memoir/types";

const highlight = (text?: string | null) => {
  if (!text) {
    return "";
  }

  return text.replace(
    /<<(.*?)>>/g,
    (_, str) => `<b class="italic font-bold text-purple-400">${str}</b>`,
  );
};

interface Props {
  track: Track;
  onClick: () => void;
}

export default function Result({ track, onClick }: Props) {
  return (
    <li class="mx-2 my-2.5 list-none truncate text-white">
      <Link href={`/tracks/${track.id}`} onClick={onClick}>
        <span
          dangerouslySetInnerHTML={{
            __html: `${highlight(track.artistHighlighted)} - ${highlight(
              track.nameHighlighted,
            )}`,
          }}
        />
      </Link>
    </li>
  );
}
