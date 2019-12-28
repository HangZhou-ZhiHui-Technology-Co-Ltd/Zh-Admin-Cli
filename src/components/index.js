import Advice from './Common/ZhAdvice'

/**
 * 通用组件
 */
const components = [
  Advice
]

const install = (Vue) => {
  components.map(item => Vue.use(item))
}

export default install
