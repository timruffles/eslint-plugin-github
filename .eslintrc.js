module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6
  },
  env: {
    es6: true,
    node: true
  },
  extends: [require.resolve('./lib/configs/recommended')]
}
