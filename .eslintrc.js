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
    '@typescript-eslint/comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never',
      'imports': 'always-multiline',
      'objects': 'always-multiline',
    }],
    'react/jsx-props-no-spreading': ['error', { exceptions: ['App'] }],
    'react/no-unknown-property': ['error', { ignore: ['class'] }],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
  },
  globals: {
    MEMOIR_ADMIN_ENABLED: 'readonly',
    MEMOIR_API_KEY: 'readonly',
    MEMOIR_API_URL: 'readonly',
    MEMOIR_CDN_URL: 'readonly',
    NodeJS: 'readonly',
  },
};
