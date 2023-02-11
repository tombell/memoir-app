import Link from "components/Link";

import { Track } from "services/memoir/types";

import "./Result.css";

const highlight = (text?: string | null) => {
  if (!text) {
    return "";
  }

  return text.replace(
    /<<(.*?)>>/g,
    (_a, str) => `<b class="track-search-result-highlight">${str}</b>`
  );
};

interface Props {
  track: Track;
  onClick: () => void;
}

const Result = ({ track, onClick }: Props) => (
  <li class="track-search-result">
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
