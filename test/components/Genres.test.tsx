import { h } from 'preact';
import { render } from 'preact-render-spy';
import test from 'ava';

import Genres from '../../src/components/Genres';

test('renders genres component', async t => {
  const genres = ['Tech House', 'House', 'Techno'];
  const ctx = render(<Genres genres={genres} />);

  const tags = ctx.find('.tag-label');

  t.is(tags.length, 3, 'has genre tags');
  t.is(tags.at(0).text(), 'House', 'has house genre tag');
  t.is(tags.at(1).text(), 'Tech House', 'has tech house genre tag');
  t.is(tags.at(2).text(), 'Techno', 'has techo genre tag');
});
