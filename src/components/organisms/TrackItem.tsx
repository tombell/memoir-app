import { h } from "preact";

import Link from "components/molecules/Link";
import Tag from "components/molecules/Tag";

export interface Props {
  id: string;
  artist: string;
  name: string;
  genre: string;
  bpm: number;
  camelotKey: string;
}

export default ({ id, artist, name, genre, bpm, camelotKey }: Props) => (
  <div class="flex-column items-center mb-6">
    <div class="mb-2 leading-5 font-bold">
      <Link href={`/tracks/${id}`}>{`${artist} - ${name}`}</Link>
    </div>

    <div class="space-x-2">
      <Tag text={bpm.toFixed(2)} color="purple" />
      <Tag text={camelotKey} color="lilac" />
      <Tag text={genre} color="blue" />
    </div>
  </div>
);
