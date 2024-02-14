import Tag from "@components/Tag";

interface Props {
  genres: string[];
}

function Genres({ genres }: Props) {
  return (
    <div class="space-x-2">
      {genres.sort().map((genre) => (
        <Tag text={genre} color="blue" />
      ))}
    </div>
  );
}

export default Genres;
