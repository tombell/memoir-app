import { h } from 'preact';
import { render } from 'preact-render-spy';
import test from 'ava';

import { FetchTracklists, FetchTracklist, FetchTracklistsByTrack } from '../../src/services/memoir/types';

import App from '../../src/components/App';

const fetchTracklistsStub: FetchTracklists = () => new Promise(resolve => resolve([]));

const fetchTracklistStub: FetchTracklist = (id: string) => (
  new Promise(resolve => resolve({
    id,
    name: 'Testing',
    date: '2019-05-19T00:00:00Z',
    trackCount: 14,
  }))
);

const fetchTracklistsByTrackStub: FetchTracklistsByTrack = () => (
  new Promise(resolve => resolve([]))
);

test('renders app component', async t => {
  const props = {
    fetchTracklist: fetchTracklistStub,
    fetchTracklists: fetchTracklistsStub,
    fetchTracklistsByTrack: fetchTracklistsByTrackStub,
  };

  const ctx = render(<App {...props} />);

  t.is(ctx.find('div').exists(), true, 'has parent container');
  t.is(ctx.find('.header').exists(), true, 'has top-level header');
});
