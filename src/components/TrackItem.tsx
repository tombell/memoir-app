import Link from "components/Link";
import Tag from "components/Tag";

export interface Props {
  id: string;
  artist: string;
  name: string;
  genre: string;
  bpm: number;
  camelotKey: string;
}

const TrackItem = ({ id, artist, name, genre, bpm, camelotKey }: Props) => (
  <div class="items-center mb-6 flex-column">
    <div class="mb-2 font-bold leading-5">
      <Link href={`/tracks/${id}`}>{`${artist} - ${name}`}</Link>
    </div>

    <div class="space-x-2">
      <Tag text={bpm.toFixed(2)} color="purple" />
      <Tag text={camelotKey} color="lilac" />
      <Tag text={genre} color="blue" />
    </div>
  </div>
);

export default TrackItem;
