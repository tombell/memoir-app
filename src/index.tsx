import { h, render } from 'preact';

import { fetchTracklists, fetchTracklist } from './services/memoir';

import App from './components/App';

const props = {
  fetchTracklists,
  fetchTracklist,
}

render(<App {...props} />, document.getElementById('root')!);
