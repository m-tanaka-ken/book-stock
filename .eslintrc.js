module.exports = {
  root: true,
  parserOptions: {
    parser: 'typescript-eslint-parser'
  },
  env: {
    browser: true,
    jest: true,
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'prettier'
  ],
  plugins: ['prettier', 'vue', 'typescript'],
  rules: {
    // https://github.com/eslint/typescript-eslint-parser#known-issues
    'no-undef': 'off',
    'no-unused-vars': 'off',
    // https://github.com/eslint/typescript-eslint-parser/issues/445
    // 'typescript/no-unused-vars': 'error',
    // https://github.com/vuejs/vue-cli/issues/1672
    'space-infix-ops': 'off',
    // temporary fix for https://github.com/vuejs/vue-cli/issues/1922
    // very strange as somehow this rule gets different behaviors depending
    // on the presence of typescript-eslint-parser...
    'strict': 'off',
    'prettier/prettier': ['error', { 'singleQuote': true }]
    }
};
