import Link from "components/Link";
import Tag from "components/Tag";

import "./TrackItem.css";

interface Props {
  id: string;
  artist: string;
  name: string;
  genre: string;
  bpm: number;
  camelotKey: string;
}

const TrackItem = ({ id, artist, name, genre, bpm, camelotKey }: Props) => (
  <div class="track-item">
    <div class="track-item-details">
      <Link href={`/tracks/${id}`}>{`${artist} - ${name}`}</Link>
    </div>

    <div class="track-item-tags">
      <Tag text={bpm.toFixed(2)} color="purple" />
      <Tag text={camelotKey} color="lilac" />
      <Tag text={genre} color="blue" />
    </div>
  </div>
);

export default TrackItem;
