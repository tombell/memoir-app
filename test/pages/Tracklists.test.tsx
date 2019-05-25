import { h } from 'preact';
import { render } from 'preact-render-spy';
import test from 'ava';

import TracklistsPage from '../../src/pages/Tracklists';

import { FetchTracklists } from '../../src/services/memoir/types';

test('renders empty tracklists page component', async t => {
  const fetchStub: FetchTracklists = () =>
    Promise.resolve({
      tracklists: [],
      hasMore: false,
    });

  const ctx = render(<TracklistsPage fetchTracklists={fetchStub} />);

  // TODO: implement proper tests

  t.truthy(ctx, 'TODO');
});
