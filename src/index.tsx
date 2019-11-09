import { h, render } from 'preact';

import {
  fetchMostPlayedTracks,
  fetchTracklist,
  fetchTracklists,
  fetchTracklistsByTrack,
  searchTracks,
} from './services/memoir';

import App from './components/App';

const props = {
  fetchMostPlayedTracks,
  fetchTracklist,
  fetchTracklists,
  fetchTracklistsByTrack,
  searchTracks,
};

render(<App {...props} />, document.getElementById('root')!);
