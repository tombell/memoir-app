import { h, render } from 'preact';

import { fetchTracklists, fetchTracklist, fetchTracklistsByTrackId } from './services/memoir';

import App from './components/App';

const props = {
  fetchTracklists,
  fetchTracklist,
  fetchTracklistsByTrackId,
};

render(<App {...props} />, document.getElementById('root')!);
