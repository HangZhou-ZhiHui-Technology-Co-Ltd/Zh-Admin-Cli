import Advice from './Common/ZHAdvice'

/**
 * 自定义组件
 */
export const components = [
  Advice
]

const install = (Vue) => {
  components.map(item => Vue.use(item))
}

export default install
