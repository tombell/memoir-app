import { h } from 'preact';
import { render } from 'preact-render-spy';
import test from 'ava';

import TracklistPage from '../../src/pages/Tracklist';

import { Tracklist } from '../../src/services/memoir/types';

const fetchTracklistStub = (id: string): Promise<Tracklist | null> => (
  new Promise(resolve => resolve({
    id,
    name: 'Testing',
    date: '2019-05-19T00:00:00Z',
  }))
);

test('renders tracklist component', async t => {
  const ctx = render(<TracklistPage id="1" fetchTracklist={fetchTracklistStub} />);

  t.truthy(ctx, 'TODO');

  // TODO: implement proper tests
  // t.is(ctx.find('h2').exists(), true, 'has top-level header');
  // t.is(ctx.find('h2').text(), 'Tracklist: 1', 'has top-level header text');
});
