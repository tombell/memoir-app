import Link from "components/Link";
import Tag from "components/Tag";

interface Props {
  id: string;
  artist: string;
  name: string;
  genre: string;
  bpm: number;
  camelotKey: string;
}

const TrackItem = ({ id, artist, name, genre, bpm, camelotKey }: Props) => (
  <div class="mb-6 items-center">
    <div class="font-bold">
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
