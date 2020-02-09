module.exports = {
  extends: ['airbnb-typescript', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
  },
  settings: {
    react: {
      pragma: 'h',
      version: '16',
    },
  },
  rules: {
    'react/jsx-props-no-spreading': ['error', { exceptions: ['App'] }],
    'react/no-unknown-property': ['error', { ignore: ['class'] }],
  },
};
