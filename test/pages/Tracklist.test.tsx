import { h } from 'preact';
import { render } from 'preact-render-spy';
import test from 'ava';

import TracklistPage from '../../src/pages/Tracklist';

import { FetchTracklist } from '../../src/services/memoir/types';

test('renders tracklist component', async t => {
  const fetchStub: FetchTracklist = id =>
    new Promise(resolve =>
      resolve({
        id,
        name: 'Testing',
        date: '2019-05-19T00:00:00Z',
        trackCount: 19,
      }),
    );

  const ctx = render(<TracklistPage id="1" fetchTracklist={fetchStub} />);

  // TODO: implement proper tests

  t.truthy(ctx, 'TODO');
});
