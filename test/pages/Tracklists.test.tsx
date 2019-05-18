import { h } from 'preact';
import { render } from 'preact-render-spy';

import test from 'ava';

import Tracklists from '../../src/pages/Tracklists';

test('renders tracklists component', async t => {
  const ctx = render(<Tracklists />);
  t.is(ctx.find('h2').exists(), true, 'has top-level header');
  t.is(ctx.find('h2').text(), 'Tracklists', 'has top-level header text');
});
