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

export default (props: Props) => {
  const { fetchTracklist, fetchTracklists } = props;

  return (
    <div class={styles.container}>
      <div class={styles.column}>
        <Header />
        <Router>
          <TracklistsPage path="/" fetchTracklists={fetchTracklists} />
          <TracklistPage path="/:id" fetchTracklist={fetchTracklist} />
        </Router>
      </div>
    </div>
  );
};
