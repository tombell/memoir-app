import { h } from 'preact';
import { shallow } from 'preact-render-spy';
import test from 'ava';

import Tag from '../../src/components/Tag';

test('renders tag component', async t => {
  const ctx = shallow(<Tag text="Test" />);
  t.is(ctx.find('.tag-label').text(), 'Test', 'tag text is correct');
});
