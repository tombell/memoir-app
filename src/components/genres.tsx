import Tag from "~/components/tag";

interface Props {
  genres: string[];
}

export default function Genres({ genres }: Props) {
  return (
    <div class="space-x-2">
      {genres.sort().map((genre) => (
        <Tag key={genre} text={genre} color="blue" />
      ))}
    </div>
  );
}
