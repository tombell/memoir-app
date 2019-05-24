import { h, render } from 'preact';

import {
  fetchTracklists,
  fetchTracklist,
  fetchTracklistsByTrack,
} from './services/memoir';

import App from './components/App';

const props = {
  fetchTracklists,
  fetchTracklist,
  fetchTracklistsByTrack,
};

render(<App {...props} />, document.getElementById('root')!);
