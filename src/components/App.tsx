import { h } from 'preact';
import { Router } from 'preact-router';

import Tracklists from '../pages/Tracklists';
import Tracklist from '../pages/Tracklist';

import Header from './Header';

import { sheet } from '../nano';

import styles from './App.styles';

const css = sheet!(styles);

export default () => (
  <div class={css.page}>
    <Header />
    <Router>
      <Tracklists path="/" />
      <Tracklist path="/:id" />
    </Router>
  </div>
);
