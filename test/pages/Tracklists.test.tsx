import { h } from 'preact';
import { render } from 'preact-render-spy';
import test from 'ava';

import TracklistsPage from '../../src/pages/Tracklists';

import { FetchTracklists } from '../../src/services/memoir/types';

test('renders empty tracklists component', async t => {
  const fetchStub: FetchTracklists = () => new Promise(resolve => resolve([]));

  const ctx = render(<TracklistsPage fetchTracklists={fetchStub} />);

  // TODO: implement proper tests

  t.truthy(ctx, 'TODO');
});
