import Tag from "components/Tag";

export interface Props {
  genres: string[];
}

const Genres = ({ genres }: Props) => (
  <div class="space-x-2">
    {genres.sort().map((genre) => (
      <Tag text={genre} color="blue" />
    ))}
  </div>
);

export default Genres;
