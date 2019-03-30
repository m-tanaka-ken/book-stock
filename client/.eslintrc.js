module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue']
  },
  env: {
    browser: true,
    jest: true,
    node: true
  },
  extends: [
    'plugin:vue/recommended'
  ],
  plugins: ['vue', '@typescript-eslint'],
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
    }
};
