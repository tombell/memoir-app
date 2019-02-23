import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './Header';

export default () => (
  <div>
    <Header />
    <Router />
  </div>
);
