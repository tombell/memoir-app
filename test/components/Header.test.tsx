import { h } from 'preact';
import { render } from 'preact-render-spy';
import test from 'ava';

import Header from '../../src/components/Header';

test('renders header component', async t => {
  const ctx = render(<Header />);
  t.truthy(ctx.find('.header').exists(), 'has header element');
  t.is(ctx.find<any, {}>('a').attr('href'), '/', 'has header link with href attr');
  t.is(ctx.find<any, {}>('img').attr('src'), '/images/logo.svg', 'has header image with src attr');
});
