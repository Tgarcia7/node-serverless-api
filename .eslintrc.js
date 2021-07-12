module.exports = {
  'env': {
    'commonjs': true,
    'es6': true,
    'node': true
  },
  'parserOptions': {
    'ecmaVersion': 2018
  },
  rules: {
    'indent': [
      'warn',
      2,
      { 'SwitchCase': 1 }
    ],
    'quotes': [
      'warn',
      'single'
    ],
    'semi': [
      'warn',
      'never'
    ],
    'eqeqeq': [
      'warn'
    ],
    'no-multiple-empty-lines': [
      'warn', { 'max': 1 }
    ],
    'no-unused-vars': [
      'warn',
      { 'vars': 'all', 'args': 'after-used' }
    ],
    'no-console': [
      'warn',
      { allow: ['info', 'warn', 'error'] }
    ],
    'eol-last': [
      'warn', 'always'
    ]
  }
}
