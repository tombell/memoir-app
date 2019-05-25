import { h } from 'preact';
import { render } from 'preact-render-spy';
import test from 'ava';

import TracklistItem from '../../src/components/TracklistItem';

test('renders tracklist item component', async t => {
  const tracklist = {
    id: '4ee730f5-97a5-4d2a-b06e-32fcb518bbcb',
    name: 'Testing Tracklist 1',
    date: '2019-05-20T00:00:00Z',
    trackCount: 3,
  };

  const ctx = render(<TracklistItem tracklist={tracklist} />);

  t.is(
    ctx.find('.tracklist-item-date').text(),
    '20/05/2019',
    'has tracklist date text',
  );
  t.is(
    ctx.find('.tracklist-item-name').text(),
    'Testing Tracklist 1',
    'has tracklist name text',
  );

  const link = ctx.find<any, {}>('.tracklist-item-link');

  t.is(link.length, 1, 'has tracklist link');
  t.is(
    link.attr('href'),
    '/tracklist/4ee730f5-97a5-4d2a-b06e-32fcb518bbcb',
    'has tracklist link href attr',
  );
});
