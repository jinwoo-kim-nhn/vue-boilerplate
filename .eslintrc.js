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
  extends: ['tui', 'plugin:vue/recommended', 'plugin:prettier/recommended'],
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    indent: [2, 2, {SwitchCase: 1, ignoreComments: false, ImportDeclaration: 1, flatTernaryExpressions: false}],
    'no-process-env': 0,
    'vue/mustache-interpolation-spacing': [2, 'never'],
    'vue/html-indent': 0,
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ]
  }
};
