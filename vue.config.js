/**
 * 路径模块
 * ---
 * @doc http://nodejs.cn/api/path.html
 * ---
 */
const path = require('path')

module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    /**
     * 路径别名
     * ---
     * @doc 绝对路径[__dirname]: http://nodejs.cn/api/globals.html#globals_dirname
     *      路径拼接[path.join]: http://nodejs.cn/api/path.html#path_path_join_paths
     * ---
     */
    config.resolve.alias.set('@$', path.join(__dirname, 'src'))
  }
}
