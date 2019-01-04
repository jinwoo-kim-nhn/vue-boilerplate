module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['tui/es6', 'plugin:vue/recommended', 'plugin:prettier/recommended'],
  plugins: ['vue'],
  // add your custom rules here
  rules: {}
};
