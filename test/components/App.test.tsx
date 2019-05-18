import { h } from 'preact';
import { render } from 'preact-render-spy';

import test from 'ava';

import App from '../../src/components/App';

test('renders app component', async t => {
  const ctx = render(<App />);
  t.is(ctx.find('div').exists(), true, 'has parent container');
  t.is(ctx.find('h1').exists(), true, 'has top-level header');
  t.is(ctx.find('h1').text(), 'Memoir', 'has top-level header text');
});
