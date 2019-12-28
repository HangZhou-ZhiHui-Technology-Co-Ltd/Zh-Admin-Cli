/**
 * 路径模块
 * ---
 * @doc http://nodejs.cn/api/path.html
 * ---
 */
const path = require('path')

module.exports = {
  /**
   * 保存时是否检查代码风格
   * ---
   * @doc https://cli.vuejs.org/zh/config/#lintonsave
   * ---
   */
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
  },
  css: {
    /**
     * 向预处理器中的 option 属性传递参数
     * ---
     * @doc https://cli.vuejs.org/guide/css.html#passing-options-to-pre-processor-loaders
     * ---
     */
    loaderOptions: {
      sass: {
        /**
         * 全局混入
         * ---
         * @doc https://github.com/webpack-contrib/sass-loader#prependdata
         * ---
         */
        prependData: '@import "@/style/global.scss";'
      }
    }
  }
}
