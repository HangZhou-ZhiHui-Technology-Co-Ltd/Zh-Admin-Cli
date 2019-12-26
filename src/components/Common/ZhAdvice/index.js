import Component from './Component'

Component.install = function (Vue) {
  Vue.component(Component.name, Component)
}

export default Component
