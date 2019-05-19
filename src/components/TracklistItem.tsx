import { h } from 'preact';
import { Link } from 'preact-router';

import { Tracklist } from '../services/memoir/types';

export default (props: { tracklist: Tracklist }) => {
  const { tracklist } = props;

  return (
    <p>
      <Link href={`/${tracklist.id}`}>{tracklist.name}</Link>
    </p>
  );
};
