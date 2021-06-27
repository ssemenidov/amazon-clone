module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'google'],
  parserOptions: {
    ecmaVersion: 8,
  },
  rules: {
    quotes: ['error', 'single'],
    indent: ['error', 2],
    semi: [2, 'always'],
  },
};
