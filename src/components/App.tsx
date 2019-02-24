import { h } from 'preact';
import { Router } from 'preact-router';

import { sheet } from '../nano';

import Header from './Header';

import Tracklists from '../pages/Tracklists';

const styles = sheet!({
  page: {
    margin: '0 auto',
    width: '620px',
  },
});

export default () => (
  <div class={styles.page}>
    <Header />
    <Router>
      <Tracklists path="/" />
    </Router>
  </div>
);
