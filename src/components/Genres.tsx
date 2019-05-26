import { h } from 'preact';

import Tag from './Tag';

export default (props: { genres: string[] }) => {
  const { genres } = props;

  return (
    <div class="genres">
      {genres.sort().map(genre => (
        <Tag text={genre} />
      ))}
    </div>
  );
};
