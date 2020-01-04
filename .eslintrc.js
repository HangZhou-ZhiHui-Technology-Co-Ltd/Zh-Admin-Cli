module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    '@vue/standard',
    'plugin:vue/essential'
  ],
  rules: {
    /**
     * 关闭 - 骆驼拼写法
     * ---
     * @doc https://eslint.bootcss.com/docs/rules/camelcase/
     * ---
     */
    'camelcase': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
