import { h } from 'preact';
import { render } from 'preact-render-spy';
import test from 'ava';

import TracklistsByTrack from '../../src/pages/TracklistsByTrack';

import { FetchTracklistsByTrackId } from '../../src/services/memoir/types';

test('renders empty tracklists by track component', async t => {
  const fetchStub: FetchTracklistsByTrackId = () => new Promise(resolve => resolve([]));

  const ctx = render(<TracklistsByTrack id="1" fetchTracklistsByTrackId={fetchStub} />);

  // TODO: implement proper tests

  t.truthy(ctx, 'TODO');
});
