import test from 'ava';

const fn = async () => Promise.resolve('foo');

test('fn returns foo', async t => {
  t.is(await fn(), 'foo', 'fn did not return foo');
});
