import Link from "components/Link";

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

interface Props {
  track: Track;
  onClick: () => void;
}

const Result = ({ track, onClick }: Props) => (
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

export default Result;
