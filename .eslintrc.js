module.exports = {
  extends: ['airbnb-typescript', 'prettier'],
  env: {
    browser: true,
  },
  settings: {
    react: { pragma: 'h' },
  },
  rules: {
    'react/jsx-props-no-spreading': ['error', { exceptions: ['App'] }],
    'react/no-unknown-property': ['error', { ignore: ['class'] }],
  },
};
