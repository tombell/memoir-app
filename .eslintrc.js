module.exports = {
  extends: ['airbnb-typescript'],
  env: {
    browser: true,
  },
  settings: {
    react: { pragma: 'h' },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-unused-vars': 'off',
  },
};
