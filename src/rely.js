import Vue from 'vue'
import lodash from 'lodash'
import moment from 'moment'
import Storage from 'vue-ls'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import ZhComponents from './components'

/**
 * 组件库 - 杭州质慧信息技术有限公司
 * ---
 * @doc http://momentjs.cn/docs/
 * ---
 */
Vue.use(ZhComponents)

/**
 * 组件库 - Ant Design - Vue 实现
 * ---
 * @doc https://vue.ant.design/docs/vue/introduce-cn/
 * ---
 */
Vue.use(Antd)

/**
 * 辅助库 - localstorage
 * ---
 * @doc https://github.com/RobinCK/vue-ls#readme
 * ---
 */
Vue.use(Storage, {
  name: 'ls',
  storage: 'session',
  namespace: 'ZH_ADMIN_'
})

/**
 * 辅助库 - Date api 语法增强
 * ---
 * @doc http://momentjs.cn/docs/
 * ---
 */
Vue.prototype._moment = moment

/**
 * 辅助库 - Javascript 语法增强
 * ---
 * @doc https://www.html.cn/doc/lodash/
 * ---
 */
Vue.prototype._lodash = lodash
