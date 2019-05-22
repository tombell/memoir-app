export default {
  compileEnhancements: false,
  extensions: ['ts', 'tsx'],
  require: [
    'ts-node/register',
    './test/helpers/setup-env'
  ],
};
