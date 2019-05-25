import { h } from 'preact';
import { render } from 'preact-render-spy';
import test from 'ava';

import TracklistsByTrack from '../../src/pages/TracklistsByTrack';

import { FetchTracklistsByTrack } from '../../src/services/memoir/types';

test('renders empty tracklists by track page component', async t => {
  const fetchStub: FetchTracklistsByTrack = () =>
    new Promise(resolve => resolve([]));

  const ctx = render(
    <TracklistsByTrack id="1" fetchTracklistsByTrack={fetchStub} />
  );

  // TODO: implement proper tests

  t.truthy(ctx, 'TODO');
});
