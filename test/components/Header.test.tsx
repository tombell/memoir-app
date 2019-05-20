import { h } from 'preact';
import { render } from 'preact-render-spy';
import test from 'ava';

import Header from '../../src/components/Header';

test('renders header component', async t => {
  const ctx = render(<Header />);
  t.is(ctx.find('h1').text(), 'Memoir', 'has header text');
  t.is(ctx.find<any, {}>('a').attr('href'), '/', 'has header link href attr');
});
