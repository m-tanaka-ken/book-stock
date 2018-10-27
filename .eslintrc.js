module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'typescript-eslint-parser'
  },
  env: {
    browser: true,
    jest: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'typescript',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  rules: {
      'prettier/prettier': ['error', { 'singleQuote': true, 'semi': false }]
    }
};
