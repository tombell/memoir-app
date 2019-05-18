import { h } from 'preact';
import { shallow } from 'preact-render-spy';

import test from 'ava';

import Header from '../../src/components/Header';

test('renders header component', async t => {
  const ctx = shallow(<Header />);
  t.is(ctx.find('h1').text(), 'Memoir', 'header text is correct');
});
