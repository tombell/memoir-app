import { h } from 'preact';
import { render } from 'preact-render-spy';
import test from 'ava';

import TracklistsPage from '../../src/pages/Tracklists';

import { Tracklist } from '../../src/services/memoir/types';

const fetchTracklistsStub = (): Promise<Tracklist[] | null> => new Promise(resolve => resolve([]));

test('renders tracklists component', async t => {
  const ctx = render(<TracklistsPage fetchTracklists={fetchTracklistsStub} />);

  t.truthy(ctx, 'TODO');

  // TODO: implement proper tests
  // t.is(ctx.find('h2').exists(), true, 'has top-level header');
  // t.is(ctx.find('h2').text(), 'Tracklists', 'has top-level header text');
});
