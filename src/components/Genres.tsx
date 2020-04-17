import { h } from 'preact';

import Tag from './Tag';

interface Props {
  genres: string[];
}

export default ({ genres }: Props) => {
  return (
    <div class="genres">
      {genres.sort().map((genre) => (
        <Tag text={genre} color="blue" />
      ))}
    </div>
  );
};
