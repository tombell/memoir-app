import { h } from 'preact';
import { Link } from 'preact-router';

import { Tracklist } from '../services/memoir/types';

interface Props {
  tracklist: Tracklist;
}

export default (props: Props) => {
  const { tracklist } = props;

  return (
    <p>
      <Link href={`/${tracklist.id}`}>{tracklist.name}</Link>
    </p>
  );
};
