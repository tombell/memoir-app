import { h } from 'preact';
import { render } from 'preact-render-spy';
import test from 'ava';

import {
  FetchMostPlayedTracks,
  FetchTracklists,
  FetchTracklist,
  FetchTracklistsByTrack,
} from '../../src/services/memoir/types';

import App from '../../src/components/App';

const fetchMostPlayedTracksStub: FetchMostPlayedTracks = () => Promise.resolve([]);

const fetchTracklistsStub: FetchTracklists = () => Promise.resolve([]);

const fetchTracklistStub: FetchTracklist = (id: string) => Promise.resolve({
  id,
  name: 'Testing',
  date: '2019-05-19T00:00:00Z',
  trackCount: 14,
});

const fetchTracklistsByTrackStub: FetchTracklistsByTrack = () => Promise.resolve([]);

test('renders app component', async t => {
  const props = {
    fetchMostPlayedTracks: fetchMostPlayedTracksStub,
    fetchTracklist: fetchTracklistStub,
    fetchTracklists: fetchTracklistsStub,
    fetchTracklistsByTrack: fetchTracklistsByTrackStub,
  };

  const ctx = render(<App {...props} />);

  t.is(ctx.find('div').exists(), true, 'has parent container');
  t.is(ctx.find('.header').exists(), true, 'has top-level header');
});
