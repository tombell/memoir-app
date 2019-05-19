import { h } from 'preact';
import { shallow } from 'preact-render-spy';
import test from 'ava';

import Tag from '../../src/components/tag';

test('renders tag component', async t => {
  const ctx = shallow(<Tag label="Test" />);
  t.is(ctx.find('span').text(), 'Test', 'tag text is correct');
});
