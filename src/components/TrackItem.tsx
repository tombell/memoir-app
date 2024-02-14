import Link from "@components/Link";
import Tag from "@components/Tag";

interface Props {
  loading?: boolean;
  id?: string;
  artist?: string;
  name?: string;
  genre?: string;
  bpm?: number;
  camelotKey?: string;
}

const TrackItem = ({
  loading = false,
  id,
  artist,
  name,
  genre,
  bpm,
  camelotKey,
}: Props) => {
  if (loading) {
    return (
      <div class="animate-pulse space-y-2" data-testid="track-loading">
        <h3 class="m-0 rounded border border-gray-700">&nbsp;</h3>

        <h3 class="m-0 rounded border border-gray-700 py-0.5">&nbsp;</h3>
      </div>
    );
  }

  return (
    <div class="mb-6 items-center space-y-1">
      <div class="font-bold">
        <Link href={`/tracks/${id}`}>{`${artist} - ${name}`}</Link>
      </div>

      <div class="space-x-2">
        <Tag text={bpm!.toFixed(2)} color="purple" />
        <Tag text={camelotKey!} color="lilac" />
        <Tag text={genre!} color="blue" />
      </div>
    </div>
  );
};

export default TrackItem;
