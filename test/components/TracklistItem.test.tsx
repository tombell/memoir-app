import { h } from 'preact';
import { render } from 'preact-render-spy';
import test from 'ava';

import TracklistItem from '../../src/components/TracklistItem';

test('renders tracklist item component', async t => {
  const tracklist = {
    id: '1',
    name: 'Testing Tracklist 1',
    date: '2019-05-20T00:00:00Z',
  }

  const ctx = render(<TracklistItem tracklist={tracklist} />);

  t.is(ctx.find('._tracklist-date').text(), '20/05/2019', 'has tracklist date');
  t.is(ctx.find('._tracklist-name').text(), 'Testing Tracklist 1', 'has tracklist name')
});
