import { h } from 'preact';
import { Router } from 'preact-router';

import { fetchTracklists, fetchTracklist } from '../services/memoir';

import TracklistsPage from '../pages/Tracklists';
import TracklistPage from '../pages/Tracklist';

import Header from './Header';

import { sheet } from '../nano';

import styles from './App.styles';

const css = sheet!(styles);

export default () => (
  <div class={css.page}>
    <Header />
    <Router>
      <TracklistsPage path="/" fetchTracklists={fetchTracklists} />
      <TracklistPage path="/:id" fetchTracklist={fetchTracklist} />
    </Router>
  </div>
);
