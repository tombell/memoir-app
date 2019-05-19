import { h } from 'preact';
import { Router } from 'preact-router';

import { Tracklist } from '../services/memoir/types';

import TracklistsPage from '../pages/Tracklists';
import TracklistPage from '../pages/Tracklist';

import Header from './Header';

import styles from './App.styles';

interface Props {
  fetchTracklists(): Promise<Tracklist[] | null>;
  fetchTracklist(id: string): Promise<Tracklist | null>;
}

export default (props: Props) => (
  <div class={styles.page}>
    <Header />
    <Router>
      <TracklistsPage path="/" fetchTracklists={props.fetchTracklists} />
      <TracklistPage path="/:id" fetchTracklist={props.fetchTracklist} />
    </Router>
  </div>
);
