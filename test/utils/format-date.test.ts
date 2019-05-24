import test from 'ava';

import formatDate from '../../src/utils/format-date';

test('formats dates', async t => {
  t.is(
    formatDate('2019-05-22T13:13:00Z'),
    '22/05/2019',
    'date with padded zeroes'
  );
  t.is(
    formatDate('2020-12-25T00:00:00Z'),
    '25/12/2020',
    'date without padded zeroes'
  );
});
