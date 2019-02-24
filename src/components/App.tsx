import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './Header';

import Tracklists from '../pages/Tracklists';

export default () => (
  <div>
    <Header />
    <Router>
      <Tracklists path="/" />
    </Router>
  </div>
);
