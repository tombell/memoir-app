import { h } from 'preact';
import { render } from 'preact-render-spy';
import test from 'ava';

import Header from '../../src/components/Header';

test('renders header component', async t => {
  const ctx = render(<Header />);
  t.is(ctx.find('h1').text(), 'Memoir', 'header text');
  t.is(ctx.find<any, {}>('a').attr('href'), '/', 'header link href attr');
});
