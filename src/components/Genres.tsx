import Tag from "components/Tag";

import "./Genres.css";

interface Props {
  genres: string[];
}

const Genres = ({ genres }: Props) => (
  <div class="genres">
    {genres.sort().map((genre) => (
      <Tag text={genre} color="blue" />
    ))}
  </div>
);

export default Genres;
