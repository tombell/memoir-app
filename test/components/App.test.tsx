import { h } from 'preact';
import { render } from 'preact-render-spy';
import test from 'ava';

import { Tracklist } from '../../src/services/memoir/types';

import App from '../../src/components/App';

const fetchTracklistsStub = (): Promise<Tracklist[] | null> => new Promise(resolve => resolve([]));

const fetchTracklistStub = (id: string): Promise<Tracklist | null> => (
  new Promise(resolve => resolve({
    id,
    name: 'Testing',
    date: '2019-05-19T00:00:00Z',
  }))
);

test('renders app component', async t => {
  const props = {
    fetchTracklist: fetchTracklistStub,
    fetchTracklists: fetchTracklistsStub,
  };

  const ctx = render(<App {...props} />);

  t.is(ctx.find('div').exists(), true, 'has parent container');
  t.is(ctx.find('h1').exists(), true, 'has top-level header');
  t.is(ctx.find('h1').text(), 'Memoir', 'has top-level header text');
});
