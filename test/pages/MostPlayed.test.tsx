import { h } from 'preact';
import { render } from 'preact-render-spy';
import test from 'ava';

import MostPlayedPage from '../../src/pages/MostPlayed';

import { FetchMostPlayedTracks } from '../../src/services/memoir/types';

test('renders most played page component', async t => {
  const fetchStub: FetchMostPlayedTracks = () => Promise.resolve([]);

  const ctx = render(<MostPlayedPage fetchMostPlayedTracks={fetchStub} />);

  // TODO: implement proper tests

  t.truthy(ctx, 'TODO');
});
