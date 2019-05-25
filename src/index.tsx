import { h, render } from 'preact';

import {
  fetchMostPlayedTracks,
  fetchTracklist,
  fetchTracklists,
  fetchTracklistsByTrack,
} from './services/memoir';

import App from './components/App';

const props = {
  fetchMostPlayedTracks,
  fetchTracklist,
  fetchTracklists,
  fetchTracklistsByTrack,
};

render(<App {...props} />, document.getElementById('root')!);
