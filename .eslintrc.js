module.exports = {
  extends: ['airbnb-typescript', 'prettier'],
  env: {
    browser: true,
  },
  settings: {
    react: { pragma: 'h' },
  },
  rules: {
    'react/no-unknown-property': ['error', { ignore: 'class' }],
  },
};
